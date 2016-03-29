import {Component, OnInit} from 'angular2/core'
import {ChartService} from "../../services/ChartService";
import {ChartFactory} from "../../factories/ChartFactory";
import {VendaPorCombustivel} from "../../models/charts/VendaPorCombustivel"
import {ReportRequest} from "../../models/ReportRequest"
import {IOnSuccessChartRequest} from "../../contracts/IOnSuccessChartRequest"
import {Ng2Highcharts} from 'ng2-highcharts/ng2-highcharts';

@Component({
    templateUrl: "app/views/charts/venda-por-combustivel.html",
    directives: [Ng2Highcharts]
})
export class VendaPorCombustivelComponent implements OnInit, IOnSuccessChartRequest {
    ChartVendasPorComb: any;
    ChartCarregado: boolean;
    constructor(private _chartService: ChartService, private _chartFactory: ChartFactory) {
    }
    
    ngOnInit() {
        this.ChartCarregado = false;
        let req = new ReportRequest("mes");
        this._chartService.vendaPorCombustiveis(req).subscribe((res) => { this.OnSuccessChartRequest(res); } );
    }
    
    OnSuccessChartRequest(_data: any): void {
        let vendasComb = <VendaPorCombustivel> _data;
        console.log(vendasComb);
        this.ChartVendasPorComb = this._chartFactory.getBarChart<VendaPorCombustivel>(vendasComb);
        this.ChartCarregado = true;
    }
}