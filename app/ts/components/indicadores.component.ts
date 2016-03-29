import {Component, OnInit} from 'angular2/core'
import {ChartService} from "../services/ChartService";
import{Indicadores} from "../models/Indicadores"
import{ReportRequest} from "../models/ReportRequest"

@Component({
    templateUrl: 'app/views/indicadores.html'
})
export class IndicadoresComponent implements OnInit{
    Indicadores: Indicadores;
    
    constructor(private _chartService: ChartService){}
    
    ngOnInit() {
        let req = new ReportRequest();
        req.ReportName = 'indicadores';
        req.Period = 'semana';
        this._chartService.indicadores(req).subscribe(data => this.Indicadores = data, error => console.log(error));
    }
}