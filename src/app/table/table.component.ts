import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { ViewService } from '../view.service'
import { Device } from '../device';
import { View } from '../view';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    devices: Device[];
    views: View[];

    constructor(private deviceService:DeviceService, private viewService:ViewService ) {
        this.devices = [];
        this.views = [];
    }

    ngOnInit() {
        //  Subscribe to the deviceService updates
        this.deviceService.deviceUpdate.subscribe({
            next: (d) => {
                if(d[1] == true) this.addDevice(d[0]);
                else this.removeDevice(d[0]);
            }
        });

        //  Subscribe to the viewService updates
        this.viewService.viewUpdate.subscribe({
            next: (v) => {
                if(v[1] == true) this.addView(v[0]);
                else this.removeView(v[0]);
            }
        });

    }

    addDevice(device:Device){
        //  Do not add duplicate devices
        if(this.devices.includes(device)) return;

        //  Add to Device list
        this.devices.push(device);

        //  Handle creation of column
    }

    removeDevice(device:Device){
        //  Find index of device in devices
        let index = this.devices.indexOf(device);

        //  If not found, do nothing
        if(index < 0) return;

        //  Remove from devices
        this.devices.splice(index,1);

        //  Handle deletion of column
    }

    addView(view:View){
        //  Do not duplicate View
        if(this.views.includes(view)) return;

        //  Add to views list
        this.views.push(view);

        //  Handle creation of row
    }

    removeView(view:View){
        //  Get index of view
        let index = this.views.indexOf(view);

        //  If not found, do nothing
        if(index < 0) return;

        //  Remove from views
        this.views.splice(index,1);

        //  Handle deletion row
    }

}
