import { Component } from '@angular/core';
import {Driver, MetricsService, Coordinates} from "./metrics.service";

@Component({
  selector: 'app-root',
  template:`
<metrics-selector [drivers]="drivers"
                    [metricNames]="metricNames"
                    (onDriverSelect)="onDriverSelect($event)"
                    (onMetricSelect)="onMetricSelect($event)"
                    ></metrics-selector>
<metrics-map [coordinates]="coordinates"></metrics-map>
  `,
})
export class AppComponent {
  drivers: Array<Driver> = [];
  metricNames: Array<string> = [];
  coordinates: Array<Coordinates> = [];
  constructor(private metricsService: MetricsService) {
    this.metricsService.getDrivers().first().subscribe((drivers: Array<Driver>) => this.drivers = drivers);
    this.metricsService.getMetricNames().first().subscribe((metricNames: Array<string>) => this.metricNames = metricNames);
  }

  onDriverSelect(id:number) {
    this.metricsService.getMetricsByDriver(id).first().subscribe((coordinates: Array<Coordinates>) => this.coordinates = coordinates);
  }

  onMetricSelect(name:string) {
    this.metricsService.getMetricsByName(name).first().subscribe((coordinates: Array<Coordinates>) => this.coordinates = coordinates);
  }
}
