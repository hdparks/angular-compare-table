import { Component, OnInit } from '@angular/core';
import { ViewService } from '../view.service';
import { View } from '../view';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

    views:View[];

    constructor(private viewService:ViewService) { }

    ngOnInit() {
        //  Get list of views from view service
        this.views = this.viewService.getViews();
    }

    boxChange(v:View, e){
        //  Check to see if view was activated or deactivated,
        //  then call the appropriate method in view service
        if(e.target.checked) this.viewService.addView(v);
        else this.viewService.removeView(v);
    }

}
