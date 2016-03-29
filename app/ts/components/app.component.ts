import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {IndicadoresComponent} from './indicadores.component'
import {UserComponent} from './user.component'

@Component({
    selector: "posto-app", 
    templateUrl: "app/views/app.html",
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: "/", name: "Indicadores", component: IndicadoresComponent, useAsDefault: true }, 
    { path: "/login", name: "Auth", component: UserComponent }
])
export class AppComponent {    
}