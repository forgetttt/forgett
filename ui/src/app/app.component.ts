import { Component } from '@angular/core';
import {Driver, MetricsService, Coordinates} from "./metrics.service";

@Component({
  selector: 'app-root',
  template:`
<metrics-selector [drivers]="drivers" (onDriverSelect)="onDriverSelect($event)"></metrics-selector>
<metrics-map [coordinates]="coordinates"></metrics-map>
  `,
})
export class AppComponent {
  drivers: Array<Driver> = [];
  coordinates: Array<Coordinates> = [];
  constructor(private metricsService: MetricsService) {
    this.metricsService.getDrivers().first().subscribe((drivers: Array<Driver>) => this.drivers = drivers);
  }

  onDriverSelect(id:number) {
    this.metricsService.getMetricsByDriver(id).first().subscribe((coordinates: Array<Coordinates>) => this.coordinates = coordinates);
  }
}
