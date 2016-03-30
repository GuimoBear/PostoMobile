import {Injectable} from "angular2/core";
import {VendasPorCombustivel} from "../models/charts/vendas-por-combustivel.model"
import {VendasPorGrupo} from "../models/charts/vendas-por-grupo.model"
import {ChartDataModel} from "../models/charts/chart-data.model"

@Injectable()
export class ChartFactory {    
    private isVendaPorCombustivel(_dados: any): boolean {
        return _dados.Result.length > 0 && _dados.Result[0].combustivel;
    }
    
    private isVendaPorGrupo(_dados: any): boolean {
        return _dados.Result.length > 0 && _dados.Result[0].grupo;
    }
    
    private convertVendasPorCombustivelToChartData(data: VendasPorCombustivel): ChartDataModel {
        let chartData = new ChartDataModel();
        chartData.textTitle = "Vendas por combustiveis";
        chartData.categories = ['Combustiveis'];
        chartData.series = [];
        data.Result.forEach((value, index, array) => { chartData.series.push({ name: value.combustivel, data: [value.valor] }); });
        return chartData;
    }
    
    private convertVendasPorGrupoToChartData(data: VendasPorGrupo): ChartDataModel {
        let chartData = new ChartDataModel();
        chartData.textTitle = "Vendas por grupo";
        chartData.categories = ['Grupos'];
        chartData.series = [];
        data.Result.forEach((value, index, array) => { chartData.series.push({ name: value.grupo, data: [value.valor] }); });
        return chartData;
    }
    
    getMonetaryBarChart<T>(_dados: T): any {
        let chartData: ChartDataModel;
        if(this.isVendaPorCombustivel(_dados)) {
            let data = <VendasPorCombustivel><any> _dados;
            chartData = this.convertVendasPorCombustivelToChartData(data);
        } else if(this.isVendaPorGrupo(_dados)) {
            let data = <VendasPorGrupo><any> _dados;
            chartData = this.convertVendasPorGrupoToChartData(data);
        }
        return {
            chart: {
                type: 'column'
            },
            credits: {
                enabled: false
            }, 
            title: {
                text: chartData.textTitle
            }, 
            xAxis: {
                categories: chartData.categories
            }, 
            yAxis: {
                min: 0,
                labels: {
                    overflow: 'justify', 
                    format: 'R$ {value:,.2f}'
                }, 
                title: {
                    text: 'valor vendido'
                }
            },                 
            series: chartData.series, 
            tooltip: {
                enabled: false
            },
            plotOptions: {
                series: {   
                    minPointLength: 3,            
                    dataLabels: {
                        align: 'center',
                        enabled: true,
                        format: 'R$ {y:,.2f}'
                    },
                    stacking: ''
                }, 
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            }, 
            labels: {
                enabled: true
            }, 
            legend: {
                layout: 'horizontal',
                align: 'left',
                verticalAlign: 'bottom',
                x: 0
            }
        };
    }
}