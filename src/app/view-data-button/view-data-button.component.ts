import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-data-button',
  templateUrl: './view-data-button.component.html',
  styleUrls: ['./view-data-button.component.css']
})
export class ViewDataButtonComponent {

    @Input() view:string;

    constructor() { }

    openModal(){
        console.log("Clicked!")
    }

}
