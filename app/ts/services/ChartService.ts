import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {ReportRequest} from '../models/ReportRequest'
import {Indicadores} from '../models/Indicadores'
import {VendaPorCombustivel} from '../models/charts/VendaPorCombustivel'
import {BaseHttpRequest} from './BaseHttpRequest'

@Injectable()
export class ChartService extends BaseHttpRequest {
    constructor(_http: Http) {
        super('Chart');
        this._http = _http;
     }
    
    indicadores(reportRequest: ReportRequest): Observable<Indicadores> {
        reportRequest.ReportName = 'indicadores';
        return this.SendPost<Indicadores>(reportRequest);
    }
    
    vendaPorCombustiveis(reportRequest: ReportRequest): Observable<VendaPorCombustivel> {
        reportRequest.ReportName = 'graficos_venda_por_combustivel';
        return this.SendPost<VendaPorCombustivel>(reportRequest);
    }
}