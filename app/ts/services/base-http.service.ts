import {Injectable} from "angular2/core";
import {Http, Response, Headers, RequestOptions} from "angular2/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

export class BaseHttpRequest {
    protected _apiUrl: string = "http://tec-soft.servehttp.com:8889/Api/";
    protected _http: Http
    protected _defaultRequestOptions: RequestOptions;
    
    constructor(apiControllerName: string) {
        this._apiUrl += apiControllerName;
        this._defaultRequestOptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } ) });
    }
    
    protected SendPost<T>(body: any): Observable<T> {
        let bodyStr = JSON.stringify(body);
        return this._http.post(this._apiUrl, bodyStr, this._defaultRequestOptions)
                         .map(res => <T> res.json())
                         .catch(this.throwError);
    }
     
    private throwError(response) {
        return Observable.throw(response.json().error || "Server error");
    }
}