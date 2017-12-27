import { Component, OnInit, Input } from '@angular/core';
import { ShortenedLinkService } from '../../components/shortened-link-form/shortened-link.service';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.css'],
  providers: [ShortenedLinkService]
})
export class StatsPageComponent implements OnInit {

  @Input()
  page: number = 1;

  @Input()
  pageSize: number = 10;

  total : number  = 0;

  data: any[] = [];

  constructor(private _shortenedLinkService : ShortenedLinkService) { }

  ngOnInit() {
    this.getData();
  }
  

  handleOnPageChange(pageChange : any) {
    this.page = pageChange.offset + 1;
    this.getData();
  }

  redirectToLink(link : string) {
    window.open(link, "_blank");
  }

  getData() {
    this._shortenedLinkService.total() 
    .subscribe(total => this.total = total);
    this._shortenedLinkService.list(this.page, this.pageSize)
        .subscribe((result) => {
          this.data = result;
        });

  }
}
