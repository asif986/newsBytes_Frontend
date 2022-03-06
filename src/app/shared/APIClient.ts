import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class APIClient {
  /*constructor(public networkService:NetworkServiceService,private nativeHttp: HTTP, public toastController: ToastController, public  webServer: WebServer) { }  private nativeHttp: HTTP*/
  constructor(public http: HttpClient) {}

  /*Get Data*/
  get(urlWithQueryParams: string) {
    const httpHeaders = new HttpHeaders().set(
      'Content-Type',
      'application/json'
    );
    return this.http.get<any>(urlWithQueryParams);
  }
  /*Post Data*/

  post(url: string, psdata?: any) {
    let httpHeaders = new HttpHeaders();
    httpHeaders.append('Accept', 'application/json');

    httpHeaders.append('Content-Type', 'multipart/form-data');
    // httpHeaders = new HttpHeaders().set('Authorization', localStorage.getItem('Auth'));
    const options = {
      headers: httpHeaders,
      // observe: 'response' as 'body',
    };

    return this.http.post<any>(url, psdata, options);
  }
  /*put Data*/

  put(url: string, psdata?: any) {
    return this.http.put<any>(url, psdata);
  }
}
