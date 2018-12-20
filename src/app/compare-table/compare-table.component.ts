import { Component, OnInit } from '@angular/core';
import { ColumnsService } from '../columns.service';
import { RowsService } from '../rows.service';

@Component({
  selector: 'app-compare-table',
  templateUrl: './compare-table.component.html',
  styleUrls: ['./compare-table.component.css']
})
export class CompareTableComponent implements OnInit {

    public rows:string[];

    public cols:string[];

    constructor(public colsService: ColumnsService, public rowsService: RowsService ) {
        rowsService.visibilityObservable$.subscribe( msg =>{ msg.vis ? this.addRow(msg.row) : this.subRow(msg.row);})
        colsService.visibilityObservable$.subscribe( msg =>{ msg.vis ? this.addCol(msg.col) : this.subCol(msg.col);})
        this.rows = [];
        this.cols = [];
    }

    ngOnInit() {
    }

    addRow(row){
        this.rows.push(row);
        //  Should I worry about duplicates? What happens?
    }

    subRow(row){
        this.rows.splice(this.rows.indexOf(row), 1)
        // What if row not in rows? Is that possible? (Clicking super fast on checkbox?)
    }

    addCol(col){
        this.cols.push(col)
    }

    subCol(col){
        this.cols.splice(this.cols.indexOf(col),1)
    }

    getRowName(r){
        return this.rowsService.getNice(r)
    }

}
