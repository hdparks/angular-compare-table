import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CellImageService {

  constructor(private http: HttpClient) { }

  getImage(filepath:string ): Observable<Blob> {
      return this.http.get(environment.apiPathString+filepath, { responseType:'blob' });
  }

}
