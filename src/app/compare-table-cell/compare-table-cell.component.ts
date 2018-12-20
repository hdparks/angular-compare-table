import { Component, OnInit, Input } from '@angular/core';
import { ImagePreloaderDirective } from '../image-preloader.directive';
import { WindowService } from "../window.service";
import { MatDialog } from "@angular/material";
import { ImageModalComponent } from '../image-modal/image-modal.component';




@Component({
  selector: 'app-compare-table-cell',
  templateUrl: './compare-table-cell.component.html',
  styleUrls: ['./compare-table-cell.component.css']
})
export class CompareTableCellComponent implements OnInit {

    @Input() row : string;
    @Input() col : string;

    // Allows for modal creation on click
    private _window : Window;

    public filename : string;
    public altname : string;
    public imageSrc;

    constructor(public windowService : WindowService, public dialog: MatDialog) {}

    ngOnInit() {

        this._window = this.windowService.nativeWindow;

        this.altname = `${this.col} ${this.row}`;

        this.filename = `/${this.col.replace(" ",'_')}/${this.row}_thumbnail.jpg`;

        this.imageSrc = `assets/public${this.filename}`
    }

    openImageModal() {
        let dialogRef = this.dialog.open(ImageModalComponent, {
            data: { name:this.filename },
            maxHeight:'80vh',
            maxWidth:'80vw',
        });
    }

}
