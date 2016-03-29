import {Injectable} from "angular2/core";
import {Http, Response, Headers, RequestOptions} from "angular2/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {ReportRequest} from '../models/ReportRequest'
import {Indicadores} from '../models/Indicadores'

@Injectable()
export class ChartService {
    private _apiUrl: string = "http://postomobile.duckdns.org:9050/Api/Chart";
    private _defaultRequestOptions: RequestOptions;
    
    constructor(private _http: Http) {
        this._defaultRequestOptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });
     }
    
    indicadores(reportRequest: ReportRequest): Observable<Indicadores> {
        let body = JSON.stringify(reportRequest);
        return this._http.post(this._apiUrl, body, this._defaultRequestOptions)
                         .map(res => <Indicadores>res.json())
                         .catch(this.throwError);
    }
    
    private throwError(response) {
        return Observable.throw(response.json().error || "Server error");
    }
}