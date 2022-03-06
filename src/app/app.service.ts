import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APIClient } from './shared/APIClient';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  URL = environment.BASE_URL;
  constructor(public apiClient: APIClient) {}

  /**
   * Adds link
   * @param data
   * @returns
   */
  addLink(data: any) {
    return this.apiClient.post(`${this.URL}/link`, data);
  }
  /**
   * Gets links
   * @returns
   */
  getLinks() {
    return this.apiClient.get(`${this.URL}/link`);
  }
  addClick(shortUrl: any) {
    return this.apiClient.put(`${this.URL}/link`, { shortUrl: shortUrl });
  }
}
