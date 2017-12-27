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
                .map((response) => response.json());
  }

  getRealLink(shortenedKey : string) : Observable<string> {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let options = new RequestOptions({ headers: headers });

    let params: URLSearchParams = new URLSearchParams();
    params.append('shortenedKey', shortenedKey);

    return this._http.get("./api/link/default/get?" + params.toString(), options)
                .map((response) => response.json());
  }

  incrementVisit(shortenedKey : string) : Observable<boolean> {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let options = new RequestOptions({ headers: headers });

    let params: URLSearchParams = new URLSearchParams();
    params.append('shortenedKey', shortenedKey);

    return this._http.get("./api/link/default/increment-visit?" + params.toString(), options)
                .map((response) => response.json());
  
  }

  getClientLink() : string {
    return AppLocal.CURRENT_URL + "i/";
  }

  list(page : number, pageSize : number) : Observable<any> {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let options = new RequestOptions({ headers: headers });

    let params: URLSearchParams = new URLSearchParams();
    params.append('page', page + "");
    params.append("pageSize", pageSize + "");
    return this._http.get("./api/link/default/list?" + params.toString(), options)
                .map((response) => response.json());
    
  }

  total() : Observable<number> {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let options = new RequestOptions({ headers: headers });

    let params: URLSearchParams = new URLSearchParams();
    return this._http.get("./api/link/default/total", options)
                .map((response) => response.json());
    
  }
}
