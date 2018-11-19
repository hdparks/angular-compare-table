import { Component, OnInit } from '@angular/core';
import { ColumnsService } from '../columns.service';

@Component({
  selector: 'app-col-checkboxes',
  templateUrl: './col-checkboxes.component.html',
  styleUrls: ['./col-checkboxes.component.css']
})
export class ColCheckboxesComponent implements OnInit {

    public cols;


    constructor(public columnsService : ColumnsService) { }

    ngOnInit() {
        this.cols = this.columnsService.cols;
    }


    update_visibility(c, e) {
        this.columnsService.update_visibility(c,e)
    }


}
