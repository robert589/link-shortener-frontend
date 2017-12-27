import { Component, OnInit } from '@angular/core';
import { ShortenedLinkService } from './shortened-link.service';
import { LinkService } from '../../link.service';

@Component({
  selector: 'app-shortened-link-form',
  templateUrl: './shortened-link-form.component.html',
  styleUrls: ['./shortened-link-form.component.css'],
  providers: [ShortenedLinkService, LinkService]
})
export class ShortenedLinkFormComponent implements OnInit {

  link : string = null;

  shortenedLink : string = null;

  errorMessage : string = null;

  constructor(private _shortenedLinkService : ShortenedLinkService,
    private _linkService : LinkService) { }

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
    return this._linkService.isLink(link);
  }

  getClientLink() : string {
    return this._shortenedLinkService.getClientLink();
  }
}
