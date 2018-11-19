import { Component, OnInit, ViewChild } from '@angular/core';import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { UploadService } from '../upload.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

    constructor(public dialogRef: MatDialogRef<DialogComponent>, public uploadService : UploadService){}

    @ViewChild('file') file;

    public files: Set<File> = new Set();
    public renames: Map<File, string> = new Map();

    addFiles() {
        this.file.nativeElement.click();
    }

    //  Creates a map of integer keys to files
    onFilesAdded() {
        // Get the files which are held in this.file
        const files : {[key: string]: File } = this.file.nativeElement.files;

        //  Add each file to the this.files object
        for (let key in files) {
            if (!isNaN(parseInt(key))) {
                this.files.add(files[key]);
                this.renames.set(files[key], files[key].name)
            }
        }
    }

    //  State variables

    progress;
    canBeClosed = true;
    primaryButtonText = 'Upload';
    showCancelButton = true;
    uploading = false;
    uploadSuccessful = false;

    closeDialog() {
        if(this.uploadSuccessful) {
            return this.dialogRef.close();
        }

        // set the component state to uploading
        this.uploading = true;

        // start the upload and save progress to the map
        this.progress = this.uploadService.upload(this.files, this.renames);

        // convert the progress map into an array
        let allProgressObservables = [];
        for (let key in this.progress) {
            allProgressObservables.push(this.progress[key].progress);
        }

        // The OK button should say finish now
        this.primaryButtonText = 'Finish';

        // The dialog cannot be closed while updating
        this.canBeClosed = false;
        this.dialogRef.disableClose = true;
        this.showCancelButton = false;

        //  When all observables are comleted
        forkJoin(allProgressObservables).subscribe( end => {
            this.canBeClosed = true;
            this.dialogRef.disableClose = false;

            this.uploadSuccessful = true;
            this.uploading = false;
        });
    }
}
