import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, URLSearchParams, Response, RequestOptions, Headers  } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppLocal } from '../../app.local';

@Injectable()
export class ShortenedLinkService {

  constructor(private _http : Http) { }

  add(link : string) : Observable<string> {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let options = new RequestOptions({ headers: headers });

    let params: URLSearchParams = new URLSearchParams();
    params.append('link', link);

    return this._http.post("./api/link/default/add", params, options)
                .map((response) => response.json())
  }

  getClientLink() : string {
    return AppLocal.CURRENT_URL + "i/";
  }
}
