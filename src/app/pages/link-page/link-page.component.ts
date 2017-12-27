import { Component, OnInit } from '@angular/core';
import { ShortenedLinkService } from '../../components/shortened-link-form/shortened-link.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { LinkService } from '../../link.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link-page',
  templateUrl: './link-page.component.html',
  styleUrls: ['./link-page.component.css'],
  providers: [ShortenedLinkService, LinkService]
})
export class LinkPageComponent implements OnInit {

  isNotFound : boolean = false;

  constructor(private _shortenedLinkService : ShortenedLinkService,
    private _activatedRoute : ActivatedRoute,
    private _router : Router,
    private _linkService : LinkService) { 

    this._activatedRoute.params.subscribe((params : Params) => {
      let shortenedKey : string = params['i'];
      if(shortenedKey) {
        this.getRealLink(shortenedKey);
      }
    });
  }

  getRealLink(shortenedKey : string) {
    this._shortenedLinkService.getRealLink(shortenedKey)
        .subscribe((result : string) => {
      if(this._linkService.isLink(result)) {
        window.location.href = result;
      }

      this.isNotFound = true;
    });
  }
  
  
  ngOnInit() {
  }

}
