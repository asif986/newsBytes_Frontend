import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { HelperService } from './shared/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  url: any;

  /**
   * Link info list of app component
   */
  linkInfoList: any = [];

  /**
   * Determines whether btn loading is
   */
  isBtnLoading: boolean = false;

  constructor(public appService: AppService, public helper: HelperService) {}

  ngOnInit() {
    this.getLinks();
  }
  /**
   * Gets links
   */
  getLinks() {
    this.appService.getLinks().subscribe(
      (res) => {
        this.linkInfoList = res.data;
      },
      (err) => {}
    );
  }

  /**
   * Adds link
   * @returns
   */
  addLink() {
    this.isBtnLoading = true;
    if (this.url == null && this.url == undefined) {
      this.isBtnLoading = false;
      this.helper.createMessage('warning', 'Please add the valid Url');
      return;
    }
    let data = { full: this.url };
    this.appService.addLink(data).subscribe(
      (res) => {
        if (res.success == 1) {
          this.helper.createMessage('success', res.message);
          this.isBtnLoading = false;
          this.getLinks();
        } else {
          this.helper.createMessage('error', res.message);
          this.isBtnLoading = false;
        }
      },
      (err) => {
        this.isBtnLoading = false;
        this.helper.createMessage('error', err.message);
      }
    );
  }

  /**
   * Urls click
   * @param shortUrl
   */
  urlClick(shortUrl: any, full: any) {
    this.appService.addClick(shortUrl).subscribe(
      (res) => {
        console.log(shortUrl);
        if (res.success == 1) {
          this.getLinks();
          window.open(full, '_blank');
          // window.location.href = ;
        }
      },
      (err) => {
        this.helper.createMessage('error', err.message);
      }
    );
  }
}
