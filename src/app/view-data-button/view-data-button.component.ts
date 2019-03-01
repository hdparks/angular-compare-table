import { Component, Input } from '@angular/core';
import { ViewDataModalComponent } from '../view-data-modal/view-data-modal.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-data-button',
  templateUrl: './view-data-button.component.html',
  styleUrls: ['./view-data-button.component.css']
})
export class ViewDataButtonComponent {

    @Input() viewName:string;

    constructor(public dialog: MatDialog) { }

    openModal(){
        let modalRef = this.dialog.open(ViewDataModalComponent, {
            data: { viewName: this.viewName }
        });
    }

}
