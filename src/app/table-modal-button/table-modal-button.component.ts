import { Component, OnInit, Input } from '@angular/core';
import { WindowService } from "../window.service";
import { MatDialog } from "@angular/material";
import { TableModalComponent } from '../table-modal/table-modal.component'

@Component({
  selector: 'app-table-modal-button',
  templateUrl: './table-modal-button.component.html',
  styleUrls: ['./table-modal-button.component.css']
})
export class TableModalButtonComponent implements OnInit {

    @Input('viewname') viewname : string;

    constructor(public dialog: MatDialog) {}

    ngOnInit() {
    }

    openTableModal() {
        let dialogRef = this.dialog.open(TableModalComponent, {
            data: { viewname : this.viewname},
            maxHeight:'80vh',
            maxWidth:'900px',
        });
    }

}
