import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Device } from '../device';
import { View } from '../view';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { ImageScaleDirective } from '../image-scale.directive';

@Component({
  selector: 'app-cell',

  animations: [
    trigger('bloom', [
        state('bloom', style({
            width:'{{imgWidth}}px',
            height: '{{imgHeight}}px',
            'border-radius': '14px',
            'box-shadow':'0 0 0 10px white',
            'z-index':1
        }), {params: {imgWidth : '300', imgHeight:'300'}}),
        state('normal',style({
            width: '100%',
            height: '100%',
        })),
        transition('normal=>bloom', animate('30ms')),
        transition('bloom=>normal', animate('150ms'))
    ])
  ],

  templateUrl: './cell.component.html',

  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

    @Input() device:Device;
    @Input() view:View;

    @ViewChild('image') image: ElementRef;
    currentState = 'normal';

    src:string;
    alt:string;

    imgHeight:string = '110%';
    imgWidth:string = '110%';

    constructor(public dialog: MatDialog) {

    }

    ngOnInit() {
        this.src = "../../../assets/public/"+this.device.assetPath+"/"+this.view.assetPath+".jpg";
        this.alt = this.device.name + " " + this.view.name;
    }

    bloom(){
        this.currentState ='bloom';
    }

    relax(){
        this.currentState = 'normal';
    }

    storeDimensions(el:any){
        this.imgHeight = el.offsetHeight;
        this.imgWidth = el.offsetWidth;
    }

    openDialog(){
        let dialogRef = this.dialog.open(ImageDialogComponent, {
            data: { src: this.src}
        });

        dialogRef.afterClosed().subscribe(result=>{
            console.log("dialog result: ${result}");
        })
    }


}
