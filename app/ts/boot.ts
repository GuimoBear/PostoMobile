import {bootstrap} from 'angular2/platform/browser'
import {CarComponent} from './components/car.component'
import {ChartService} from "./services/ChartService";
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";

bootstrap(CarComponent, [ROUTER_PROVIDERS, ChartService, HTTP_PROVIDERS]);