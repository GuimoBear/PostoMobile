export class ReportRequest {
    Key: string;
    ReportName: string;
    Period: string; // semana, mes, ano, customizado
    StartDate: string;
    EndDate: string;
    Code: string;
}

/*
                case "indicadores":
                    response = this.ReportRepository.RecuperarIndicadoresPrincipal(request); break;

                // Gráfico de vendas por combustível
                case "graficos_venda_por_combustivel":
                    response = this.ReportRepository.RecuperarVendaPorCombustivel(request); break;

                // Gráfico de vendas por grupo
                case "graficos_venda_por_grupo":
                    response = this.ReportRepository.RecuperarVendaPorGrupo(request); break;

                // Gráfico de vendas por turno
                case "graficos_venda_por_turno":
                    response = this.ReportRepository.RecuperarVendaPorTurno(request); break;

                // Gráfico de vendas por horário
                case "graficos_venda_por_horario":
                    response = this.ReportRepository.RecuperarVendaPorHorario(request); break;

                // Gráfico de vendas por mês
                case "graficos_venda_por_mes":
                    response = this.ReportRepository.RecuperarVendaPorMes(request); break;

                // Gráfico de vendas por horário
                case "graficos_saldo_tanques":
                    response = this.ReportRepository.RecuperarSaldoDosTanques(request); break;

                // Gráfico de vendas por horário
                case "graficos_saldo_combustivel":
                    response = this.ReportRepository.RecuperarSaldoPorCombustivel(request); break;

                // Grafíco de venda por funcionario
                case "graficos_venda_funcionario":
                    response = this.ReportRepository.RecuperarVendaPorFuncionario(request); break;

                // Grafíco de venda por recebimento
                case "graficos_venda_por_recebimento":
                    response = this.ReportRepository.RecuperarVendaPorTipoRecebimento(request); break;

                // Relatório de estoque mínimo combustível
                case "relatorio_estoque_minimo_combustivel":
                    response = this.ReportRepository.RecuperarEstoqueMinimoCombustivel(request); break;

                // Relatório de estoque mínimo produto
                case "relatorio_estoque_minimo_produto":
                    response = this.ReportRepository.RecuperarEstoqueMinimoProduto(request); break;

                // Relatório previsao
                case "relatorio_previsao_venda":
                    response = this.ReportRepository.RecuperarPrevisaoDeVenda(request); break;

                // Fluxo de Caixa
                case "relatorio_fluxo_caixa":
                    response = this.ReportRepository.RecuperarResumoFluxoCaixa(request); break;

                // rentabilidade
                case "relatorio_analise_rentabilidade":
                    response = this.ReportRepository.RecuperarAnaliseRentabilidade(request); break;

                // Clientes
                case "lista_clientes":
                    response = this.ReportRepository.RecuperarClientes(request); break;

                // Clientes
                case "vendas_combustivel_por_clientes":
                    response = this.ReportRepository.RecuperarVendaCombustivelPorCliente(request); break;
*/