import {Component, OnInit} from 'angular2/core'
import {ChartService} from "../../services/chart.service";
import {ChartFactory} from "../../factories/chart.factory";
import {VendasPorCombustivel} from "../../models/charts/vendas-por-combustivel.model"
import {ReportRequest} from "../../models/report-request.model"
import {IOnSuccessChartRequest} from "../../contracts/IOnSuccessChartRequest"
import {Ng2Highcharts} from '../../ng2-highcharts/ng2-highcharts';
import {ChartBaseComponent} from "./chart-base.component"

@Component({
    templateUrl: "app/views/charts/generic-chart.html",
    directives: [Ng2Highcharts]
})
export class VendaPorCombustivelComponent extends ChartBaseComponent implements OnInit, IOnSuccessChartRequest {
    constructor(private _chartService: ChartService, private _chartFactory: ChartFactory) {
        super();
    }
    
    ngOnInit() {
        this.ChartCarregado = false;
        let req = new ReportRequest("mes");
        this._chartService.vendasPorCombustiveis(req).subscribe((res) => { this.OnSuccessChartRequest(res); } );
    }
    
    OnSuccessChartRequest(_data: VendasPorCombustivel): void {
        console.log(_data);
        this.ChartData = this._chartFactory.getMonetaryBarChart<VendasPorCombustivel>(_data);
        this.ChartCarregado = true;
    }
}