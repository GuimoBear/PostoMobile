import {Component, OnInit} from 'angular2/core'
import {ChartService} from "../../services/chart.service";
import {ChartFactory} from "../../factories/chart.factory";
import {VendasPorGrupo} from "../../models/charts/vendas-por-grupo.model"
import {ReportRequest} from "../../models/report-request.model"
import {IOnSuccessChartRequest} from "../../contracts/IOnSuccessChartRequest"
import {Ng2Highcharts} from '../../ng2-highcharts/ng2-highcharts';
import {ChartBaseComponent} from './chart-base.component';

@Component({
    templateUrl: "app/views/charts/generic-chart.html",
    directives: [Ng2Highcharts]
})
export class VendaPorGrupoComponent extends ChartBaseComponent implements OnInit, IOnSuccessChartRequest {
    constructor(private _chartService: ChartService, private _chartFactory: ChartFactory) {
        super();
    }
    
    ngOnInit() {
        this.ChartCarregado = false;
        let req = new ReportRequest("mes");
        this._chartService.vendasPorGrupo(req).subscribe((res) => { this.OnSuccessChartRequest(res); } );
    }
    
    OnSuccessChartRequest(_data: any): void {
        let vendasComb = <VendasPorGrupo> _data;
        console.log(vendasComb);
        this.ChartData = this._chartFactory.getMonetaryBarChart<VendasPorGrupo>(vendasComb);
        this.ChartCarregado = true;
    }
}