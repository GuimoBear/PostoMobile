import {bootstrap} from 'angular2/platform/browser'
import {enableProdMode} from 'angular2/core';
import {AppComponent} from './components/app.component'
import {ChartService} from "./services/chart.service";
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import {ChartFactory} from './factories/chart.factory';

enableProdMode();
bootstrap(AppComponent, [ROUTER_PROVIDERS,
                         ChartService,  
                         ChartFactory,
                         HTTP_PROVIDERS]);