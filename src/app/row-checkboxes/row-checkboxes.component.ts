import { Component, OnInit } from '@angular/core';
import { RowsService } from '../rows.service';

@Component({
  selector: 'app-row-checkboxes',
  templateUrl: './row-checkboxes.component.html',
  styleUrls: ['./row-checkboxes.component.css']
})
export class RowCheckboxesComponent implements OnInit {

    private rows;

    constructor(public rowsService : RowsService) { }

    ngOnInit() {
        this.rows = this.rowsService.rows;
    }

    update_visibility(r,$event){
        this.rowsService.update_visibility(r,$event)
    }

    getNice(r){
        return this.rowsService.getNice(r)
    }


}
