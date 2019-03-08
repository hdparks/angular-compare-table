import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ReadJsonService } from '../read-json.service';
import { DEVICES } from '../device-data'

@Component({
  selector: 'app-view-data-modal',
  templateUrl: './view-data-modal.component.html',
  styleUrls: ['./view-data-modal.component.css']
})
export class ViewDataModalComponent implements OnInit {

    public devices = DEVICES;
    public propertiesList: Observable<Object[]>;

    constructor(@Inject(MAT_DIALOG_DATA) public viewData: any, private readJsonService:ReadJsonService) {
        this.propertiesList = new Observable((observer)=>{
            //
            observer.next([{name:"Loading..."}])


            //  relays the view-specific data from the JSON file
            this.readJsonService.getJSON().subscribe((jsonData)=>{
                console.log( "Got data!", jsonData, this.viewData.viewName )
                observer.next( jsonData[ this.viewData.viewName ] );
            });
        });
    }


    ngOnInit() {
        console.log("List of devices:", DEVICES);
    }

}
