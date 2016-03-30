import {Injectable} from "angular2/core";
import {VendasPorCombustivel} from "../models/charts/vendas-por-combustivel.model"
import {VendasPorGrupo} from "../models/charts/vendas-por-grupo.model"
import {VendasPorTurno} from "../models/charts/vendas-por-turno.model"
import {VendasPorMes} from "../models/charts/vendas-por-mes.model"
import {VendasPorRecebimento} from "../models/charts/vendas-por-recebimento.model"
import {ChartDataModel} from "../models/charts/chart-data.model"

@Injectable()
export class ChartFactory {    
    private isVendaPorCombustivel(_dados: any): boolean {
        return _dados.Result.length > 0 && _dados.Result[0].combustivel;
    }
    
    private isVendaPorGrupo(_dados: any): boolean {
        return _dados.Result.length > 0 && _dados.Result[0].grupo;
    }
    
    private isVendaPorTurno(_dados: any): boolean {
        return _dados.Result.length > 0 && _dados.Result[0].turno;
    }
    
    private isVendaPorMes(_dados: any): boolean {
        return _dados.Result.length > 0 && _dados.Result[0].mes;
    }
    
    private isVendaPorRecebimento(_dados: any): boolean {
        return _dados.Result.length > 0 && _dados.Result[0].tipo;
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
    
    private convertVendasPorTurnoToChartData(data: VendasPorTurno): ChartDataModel {
        let chartData = new ChartDataModel();
        chartData.textTitle = "Vendas por turno";
        chartData.categories = ['produto', 'combustivel'];
        chartData.series = [];
        data.Result.forEach((value, index, array) => { chartData.series.push({ name: value.turno, data: [value.produto, value.combustivel] }); });
        return chartData;
    }
    
    private convertVendasPorMesToChartData(data: VendasPorMes): ChartDataModel {
        let meses: string[] = ['', 'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
        let chartData = new ChartDataModel();
        chartData.textTitle = "Vendas por mes";
        chartData.categories = [];
        chartData.series = [];
        let produtos: any = { name: 'produto', data: [] };
        let combustiveis: any = { name: 'combustivel', data: [] };
        data.Result.forEach((value) => { chartData.categories.push(meses[value.mes]); produtos.data.push(value.produto); combustiveis.data.push(value.combustivel); });
        chartData.series.push(produtos);
        chartData.series.push(combustiveis);
        return chartData;
    }
    
    private convertVendasPorRecebimentoToChartData(data: VendasPorRecebimento): ChartDataModel {
        let chartData = new ChartDataModel();
        chartData.textTitle = "Vendas por recebimento";
        chartData.categories = ['Recebimento'];
        chartData.series = [];
        data.Result.forEach((value) => { chartData.series.push({ name: value.tipo, data: [value.valor] }); });
        return chartData;
    }
    
    getMonetaryBarChart<T>(_dados: T): any {
        let chartData: ChartDataModel;
        if(this.isVendaPorTurno(_dados)) {            
            let data = <VendasPorTurno><any> _dados;
            chartData = this.convertVendasPorTurnoToChartData(data);
        } else if(this.isVendaPorRecebimento(_dados)) {
            let data = <VendasPorRecebimento><any> _dados;
            chartData = this.convertVendasPorRecebimentoToChartData(data);
        } else if(this.isVendaPorGrupo(_dados)) {
            let data = <VendasPorGrupo><any> _dados;
            chartData = this.convertVendasPorGrupoToChartData(data);
        } else if(this.isVendaPorMes(_dados)) {
            let data = <VendasPorMes><any> _dados;
            chartData = this.convertVendasPorMesToChartData(data);
        } else if(this.isVendaPorCombustivel(_dados)) {
            let data = <VendasPorCombustivel><any> _dados;
            chartData = this.convertVendasPorCombustivelToChartData(data);
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
    
    getMonetaryLineChart<T>(_dados: T): any {
        let chartData: ChartDataModel;
        if(this.isVendaPorMes(_dados)) {
            let data = <VendasPorMes><any> _dados;
            chartData = this.convertVendasPorMesToChartData(data);
        }
        return {
            chart: {
                type: 'line'
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