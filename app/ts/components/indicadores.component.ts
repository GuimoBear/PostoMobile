import {Component, OnInit} from 'angular2/core'
import {ChartService} from "../services/chart.service";
import{Indicadores} from "../models/indicadores.model"
import{ReportRequest} from "../models/report-request.model"

@Component({
    templateUrl: 'app/views/indicadores.html'
})
export class IndicadoresComponent implements OnInit{
    Indicadores: Indicadores;
    
    constructor(private _chartService: ChartService){}
    
    ngOnInit() {
        let req = new ReportRequest('semana');
        this._chartService.indicadores(req).subscribe(data => this.Indicadores = data, error => console.log(error));
    }
}