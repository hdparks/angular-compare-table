import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ReadJsonService } from '../read-json.service';

@Component({
  selector: 'app-view-data-modal',
  templateUrl: './view-data-modal.component.html',
  styleUrls: ['./view-data-modal.component.css']
})
export class ViewDataModalComponent implements OnInit {

    public propertiesList: Observable<Object[]>;

    constructor(@Inject(MAT_DIALOG_DATA) public viewData: any, private readJsonService:ReadJsonService) {
        this.propertiesList = new Observable((observer)=>{
            //  parses the view-specific data from the JSON file,
            //  relays that out as an observable
            this.readJsonService.getJSON().subscribe((jsonData)=>{
                console.log("Got data!",jsonData, this.viewData.viewName)
                observer.next(jsonData[this.viewData.viewName]);
            });
            observer.next([{name:"Loading..."}])
        });
    }


    ngOnInit() {
    }

}
