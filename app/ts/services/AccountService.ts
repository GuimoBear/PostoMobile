import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {AccountRequest} from '../models/AccountRequest'
import {AccountResponse} from '../models/AccountResponse'
import {BaseHttpRequest} from './BaseHttpRequest'

@Injectable()
export class AccountService extends BaseHttpRequest {
    constructor(_http: Http) {
        super('Account');
        this._http = _http;
    }
    
    login(reportRequest: AccountRequest): Observable<AccountResponse> {
        return this.SendPost<AccountResponse>(reportRequest);
    }
}