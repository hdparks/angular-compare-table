import { Injectable } from '@angular/core';
import { View } from './view';
import { VIEWS } from './view-data';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

    public viewUpdate = new Subject();

    constructor() { }

    addView(view:View){
        this.viewUpdate.next([view,true]);
    }

    removeView(view:View){
        this.viewUpdate.next([view,false]);
    }

    getViews(): View[]{
        return VIEWS;
    }
}
