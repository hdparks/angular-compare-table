import { Injectable } from '@angular/core';
import { Device } from './device';
import { DEVICES } from './device-data';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

    public deviceUpdate = new Subject();

    constructor() { }

    addDevice(device:Device){
        this.deviceUpdate.next([device,true]);
    }

    removeDevice(device:Device){
        this.deviceUpdate.next([device,false]);
    }

    getDevices(): Device[]{
      return DEVICES;
    }




}
