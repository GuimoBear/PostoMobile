/// <reference path="../../typings/browser.d.ts" />
import { ElementRef, OnDestroy } from 'angular2/core';
export declare class Ng2Highcharts implements OnDestroy {
    hostElement: ElementRef;
    chart: HighchartsChartObject;
    constructor(ele: ElementRef);
    options: HighchartsOptions;
    ngOnDestroy(): void;
}
