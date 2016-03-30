import {Component, OnInit} from 'angular2/core'
import {ChartService} from "../../services/chart.service";
import {ChartFactory} from "../../factories/chart.factory";
import {VendasPorRecebimento} from "../../models/charts/vendas-por-recebimento.model"
import {ReportRequest} from "../../models/report-request.model"
import {IOnSuccessChartRequest} from "../../contracts/IOnSuccessChartRequest"
import {Ng2Highcharts} from '../../ng2-highcharts/ng2-highcharts';
import {ChartBaseComponent} from './chart-base.component';

@Component({
    templateUrl: "app/views/charts/generic-chart.html",
    directives: [Ng2Highcharts]
})
export class VendaPorRecebimentoComponent extends ChartBaseComponent implements OnInit, IOnSuccessChartRequest {
    constructor(private _chartService: ChartService, private _chartFactory: ChartFactory) {
        super();
    }
    
    ngOnInit() {
        this.ChartCarregado = false;
        let req = new ReportRequest("mes");
        this._chartService.vendasPorRecebimento(req).subscribe((res) => { this.OnSuccessChartRequest(res); } );
    }
    
    OnSuccessChartRequest(_data: any): void {
        let vendasRecebimento = <VendasPorRecebimento> _data;
        console.log(vendasRecebimento);
        this.ChartData = this._chartFactory.getMonetaryBarChart<VendasPorRecebimento>(vendasRecebimento);
        this.ChartCarregado = true;
    }
}