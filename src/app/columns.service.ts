import { Injectable } from '@angular/core';
import { COLS } from './row-column-definitions';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColumnsService {
    // columns is a list of strings, the names of the different BYUtv devices
    public cols;

    //  Obesrvable source
    private visibilitySource = new Subject<any>();

    //  Observable streams
    public visibilityObservable$ = this.visibilitySource.asObservable();

    constructor() {
        this.cols = COLS.map( (c,i) => {return c})
    }

    update_visibility(col:string, vis:boolean){
        this.visibilitySource.next({col:col, vis:vis});
    }


}
