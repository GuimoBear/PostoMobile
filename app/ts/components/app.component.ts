import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {IndicadoresComponent} from './indicadores.component'
import {UserComponent} from './user.component'
import {VendaPorCombustivelComponent} from './charts/vendas-por-combustivel.component'
import {VendaPorGrupoComponent} from './charts/vendas-por-grupo.component'
import {VendaPorTurnoComponent} from './charts/vendas-por-turno.component'
import {VendaPorMesComponent} from './charts/vendas-por-mes.component'
import {VendaPorRecebimentoComponent} from './charts/vendas-por-recebimento.component'
import {VendaPorFuncionarioComponent} from './charts/vendas-por-funcionario.component'

@Component({
    selector: "posto-app", 
    templateUrl: "app/views/app.html",
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: "/", name: "Indicadores", component: IndicadoresComponent, useAsDefault: true }, 
    { path: "/login", name: "Auth", component: UserComponent }, 
    { path: "/vendasPorCombustivel", name: "VendasPorComb", component: VendaPorCombustivelComponent }, 
    { path: "/vendasPorGrupo", name: "VendasPorGrupo", component: VendaPorGrupoComponent }, 
    { path: "/vendasPorTurno", name: "VendasPorTurno", component: VendaPorTurnoComponent }, 
    { path: "/vendasPorMes", name: "VendasPorMes", component: VendaPorMesComponent },
    { path: "/vendasPorRecebimento", name: "VendasPorRecebimento", component: VendaPorRecebimentoComponent },
    { path: "/vendasPorFuncionario", name: "VendasPorFuncionario", component: VendaPorFuncionarioComponent }
])
export class AppComponent {
}