import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ImageModalService {

  constructor(private http: HttpClient) { }

  public getImage(filepath:string): Observable<Blob> {
      console.log('imageModalService, Making some calls about', filepath)
      return this.http.get(environment.apiPathString+filepath.replace('_thumbnail.jpg','.jpg'), { responseType:'blob'});
  }
}
