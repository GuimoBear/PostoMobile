import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {ReportRequest} from '../models/report-request.model'
import {Indicadores} from '../models/indicadores.model'
import {VendasPorCombustivel} from '../models/charts/vendas-por-combustivel.model'
import {VendasPorGrupo} from '../models/charts/vendas-por-grupo.model'
import {VendasPorTurno} from '../models/charts/vendas-por-turno.model'
import {VendasPorMes} from '../models/charts/vendas-por-mes.model'
import {VendasPorRecebimento} from '../models/charts/vendas-por-recebimento.model'
import {BaseHttpRequest} from './base-http.service'

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
    
    vendasPorCombustiveis(reportRequest: ReportRequest): Observable<VendasPorCombustivel> {
        reportRequest.ReportName = 'graficos_venda_por_combustivel';
        return this.SendPost<VendasPorCombustivel>(reportRequest);
    }
    
    vendasPorGrupo(reportRequest: ReportRequest): Observable<VendasPorGrupo> {
        reportRequest.ReportName = 'graficos_venda_por_grupo';
        return this.SendPost<VendasPorGrupo>(reportRequest);
    }
    
    vendasPorTurno(reportRequest: ReportRequest): Observable<VendasPorTurno> {
        reportRequest.ReportName = 'graficos_venda_por_turno';
        return this.SendPost<VendasPorTurno>(reportRequest);
    }
    
    vendasPorMes(reportRequest: ReportRequest): Observable<VendasPorMes> {
        reportRequest.ReportName = 'graficos_venda_por_mes';
        return this.SendPost<VendasPorMes>(reportRequest);
    }
    
    vendasPorRecebimento(reportRequest: ReportRequest): Observable<VendasPorRecebimento> {
        reportRequest.ReportName = 'graficos_venda_por_recebimento';
        return this.SendPost<VendasPorRecebimento>(reportRequest);
    }
}