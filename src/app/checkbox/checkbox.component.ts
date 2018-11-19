import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

    @Input() name : string;

    constructor() { }

    ngOnInit() {
    }

    @Output() checkbox_checked = new EventEmitter();

    checkbox_change(e){
        if(e.target.checked){
            this.checkbox_checked.emit(true)
        } else {
            this.checkbox_checked.emit(false)
        }
    }

}
