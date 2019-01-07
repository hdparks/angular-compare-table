import { Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import jsonData from '../../assets/feature_data.json';

@Component({
  selector: 'app-table-modal',
  templateUrl: './table-modal.component.html',
  styleUrls: ['./table-modal.component.css']
})
export class TableModalComponent implements OnInit{

    public jsonData = jsonData;
    public features;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

    }

    ngOnInit() {
        let view = this.data.viewname
        this.features = this.jsonData[view]
    }

}
