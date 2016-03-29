import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: "posto-app", 
    templateUrl: "app/view/app.html",
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: "/", name: "Indicadores", component: null, useAsDefault: true }
])
export class AppComponent {    
}