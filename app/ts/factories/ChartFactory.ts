import {Injectable} from "angular2/core";
import {VendaPorCombustivel} from "../models/charts/VendaPorCombustivel"

@Injectable()
export class ChartFactory {
    
    getLineChart<T>(_dados: T): any {
        if(typeof(_dados) == typeof(VendaPorCombustivel)) {
            let data = <VendaPorCombustivel><any> _dados;
        }
        return {
            chart: {
                type: "line"
            }, 
            
        };
    }
    
    getBarChart<T>(_dados: T): any {
        if(typeof(_dados) == typeof(new VendaPorCombustivel())) {
            let data: VendaPorCombustivel = <VendaPorCombustivel><any> _dados;            
            let series: any[] = [];
            data.Result.forEach((value, index, array) => { series.push({ name: value.combustivel, data: [value.valor] }); });
            return {
                chart: {
                    type: 'column'
                },
                title: {
                    text: "Vendas por combustíveis"
                }, 
                xAxis: {
                    categories: ['Valor vendido']
                }, 
                yAxis: {
                    min: 0,
                    labels: {
                        overflow: 'justify'
                    }
                }, 
                series: series, 
                tooltip: {
                    valuePrefix: 'R$ '
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                }, 
                legend: {
                    layout: 'horizontal',
                    align: 'left',
                    verticalAlign: 'bottom',
                    x: 0,
                    y: -12
                }
            };
        }
    }
}