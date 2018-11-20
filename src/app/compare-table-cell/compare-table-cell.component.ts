import { Component, OnInit, Input } from '@angular/core';
import { ImagePreloaderDirective } from '../image-preloader.directive';
import { CellImageService } from '../cell-image.service';
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

    public cellType : number;
    private _window : Window;

    public filename : string;
    public altname : string;
    public imageSrc;

    constructor(public cellImageService : CellImageService, public windowService : WindowService, public dialog: MatDialog) {}

    extractImgSrc(b:Blob){
        let reader = new FileReader();
        reader.addEventListener('load', ()=>{
            this.imageSrc = reader.result;
        });
        reader.readAsDataURL(b);
    }

    ngOnInit() {

        this._window = this.windowService.nativeWindow;

        this.altname = `${this.col} ${this.row}`;

        if (!this.row && !this.col){
            this.cellType = 1
        } else if (this.row && !this.col){
            this.cellType = 2
        } else if (!this.row && this.col){
            this.cellType = 3
        } else {
            this.filename = `/${this.col.replace(" ",'-')}/${this.row}_thumbnail.jpg`;
            this.cellType = 0
        }

        if (this.cellType == 0){
            let imgblob;
            this.cellImageService.getImage(this.filename).subscribe(
                (blob) => {
                    this.extractImgSrc(blob)
                },
                (err) => {
                    this.cellImageService.getImage('/default.jpg').subscribe(def => {
                        this.extractImgSrc(def)
                    });
                    console.log('Making call for default.jpg')
                },
            )
        }
    }

    openModal() {
        console.log('Clicked on', this.filename)
        let dialogRef = this.dialog.open(ImageModalComponent, {
            data: { name:this.filename },
            maxHeight:'80vh',
            maxWidth:'80vw',
        });
    }

}
