import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  public upload(files: Set<File>, renames: Map<File, string>): {[key:string]:Observable<number>}{
      const status = {};

      files.forEach(file => {
          // Create a new multi-part form for every file
          const formData: FormData = new FormData();
          formData.append('file', file, renames.get(file));

          // create an http-post request and pass the form
          // tell it to report the upload progress
          const req = new HttpRequest('POST', environment.apiUpload, formData, {
              reportProgress: true
          });

          // Create a new progress-subject for every file
          const progress = new Subject<number>();

          // Send the http-request and subscribe to progress updates
          this.http.request(req).subscribe(event => {
              if (event.type === HttpEventType.UploadProgress) {

                  // calculate progress percentage
                  const percentDone = Math.round(100 * event.loaded / event.total);

                  // pass percentage through progress subject
                  progress.next(percentDone);
              } else if (event instanceof HttpResponse) {
                  // Once complete, close the stream
                  progress.complete();
              }
          });

          status[file.name] = {
              progress: progress.asObservable()
          };

      });
      // return map of progress.observables
      return status;
  }

}
