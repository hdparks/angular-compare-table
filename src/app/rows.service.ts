import { Injectable } from '@angular/core';
import { ROWS } from './row-column-definitions';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RowsService {
    // rows is a list of the features being compared/contrasted
    public rows;
    private rowsNice;

    // Observable string source
    public visibilitySource = new Subject<any>();

    // Observable string/bool streams
    visibilityObservable$ = this.visibilitySource.asObservable();

    // Visibility commands
    update_visibility(row:string, vis:boolean){
        this.visibilitySource.next({row:row,vis:vis});
    }

    constructor() {
        this.rows = ROWS.map( (r,i) => {return r[0]})
        this.rowsNice = ROWS.map( (r,i) => {return r[1]})
    }

    getNice(r){
        return this.rowsNice[this.rows.indexOf(r)]
    }
}
