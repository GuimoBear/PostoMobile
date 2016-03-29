import {Injectable} from "angular2/core";
import {Http, Response, Headers, RequestOptions} from "angular2/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {AccountRequest} from '../models/AccountRequest'
import {AccountResponse} from '../models/AccountResponse'

@Injectable()
export class AccountService {
    private _apiUrl: string = "http://postomobile.duckdns.org:9050/Api/Account";
    private _defaultRequestOptions: RequestOptions;
    
    constructor(private _http: Http) {
        this._defaultRequestOptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });
     }
    
    login(reportRequest: AccountRequest): Observable<AccountResponse> {
        let body = JSON.stringify(reportRequest);
        return this._http.post(this._apiUrl, body, this._defaultRequestOptions)
                         .map(res => <AccountResponse>res.json())
                         .catch(this.throwError);
    }
    
    private throwError(response) {
        return Observable.throw(response.json().error || "Server error");
    }
}