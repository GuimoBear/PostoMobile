import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './components/app.component'
import {ChartService} from "./services/ChartService";
import {AccountService} from "./services/AccountService";
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import {ChartFactory} from './factories/ChartFactory';

bootstrap(AppComponent, [ROUTER_PROVIDERS,
                         ChartService,  
                         ChartFactory,
                         AccountService, 
                         HTTP_PROVIDERS]);