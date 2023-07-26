import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AppConstant } from "./Constants";

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private url: string = AppConstant.api.url;

    constructor(private _http: HttpClient) { }

    getUrl(uri: string = ""): any {
        return typeof (uri !== "") ? this._http.get(this.url + uri) : this._http.get(this.url);
    }
}
