import { Injectable } from '@angular/core';

@Injectable()
export class LinkService {

  constructor() { }

  isLink(link : string) : boolean {
    let re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    return re.test(link);
  }
}
