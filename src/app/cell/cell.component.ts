import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../device';
import { View } from '../view';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

    @Input() device:Device;
    @Input() view:View;

    src:string;
    alt:string;

    constructor() { }

    ngOnInit() {
        this.src = "../../../assets/public/"+this.device.assetPath+"/"+this.view.assetPath+".jpg";
        this.alt = this.device.name + " " + this.view.name;
    }

}
