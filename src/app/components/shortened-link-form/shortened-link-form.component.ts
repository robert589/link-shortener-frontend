import { Component, OnInit } from '@angular/core';
import { ShortenedLinkService } from './shortened-link.service';

@Component({
  selector: 'app-shortened-link-form',
  templateUrl: './shortened-link-form.component.html',
  styleUrls: ['./shortened-link-form.component.css'],
  providers: [ShortenedLinkService]
})
export class ShortenedLinkFormComponent implements OnInit {

  link : string = null;

  shortenedLink : string = null;

  errorMessage : string = null;

  constructor(private _shortenedLinkService : ShortenedLinkService) { }

  ngOnInit() {

  }

  add() {
    this.errorMessage = "";

    if(!this.link) {
      this.errorMessage = "Field is empty";
      return;
    }
    if(!this.isLink(this.link)) {
      this.errorMessage = "Not a link";
      return;
    }
    this._shortenedLinkService.add(this.link)
        .subscribe((shortenedLink : string) => {
      this.shortenedLink = shortenedLink;
    })
  }

  isLink(link : string) : boolean {
    let re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    return re.test(link);
  }

  getClientLink() : string {
    return this._shortenedLinkService.getClientLink();
  }
}
