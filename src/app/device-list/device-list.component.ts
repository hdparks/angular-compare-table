import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { Device } from '../device';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

    devices:Device[];

    constructor(private deviceService:DeviceService) { }

    ngOnInit() {
        //  Get device list from device service
        this.devices = this.deviceService.getDevices();
    }

    boxChange(d:Device,e){
        //  Check to see if the device was activated or disactivated,
        //  then call the appropriate method in device service
        if(e.target.checked) this.deviceService.addDevice(d);
        else this.deviceService.removeDevice(d);
    }

}
