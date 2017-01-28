import {Component, Input, Output, EventEmitter} from "@angular/core";
import {MetricsService, Driver} from "./metrics.service";
import 'rxjs/add/operator/first'
/**
 * Created by tamary on 1/27/2017.
 */
@Component({
  selector: 'metrics-selector',
  template:`
<h1>select metrics</h1>
<div>
  <span>Driver: </span>
  <select [(ngModel)]="driverId" (ngModelChange)="onDriverChange($event)">
    <option *ngFor="let driver of drivers" [value]="driver.id">{{driver.name}}</option>
  </select>
  <b> OR </b>
  <span>Metric: </span>
  <select [(ngModel)]="metricName" (ngModelChange)="onMetricNameChange($event)">
    <option *ngFor="let name of metricNames" [value]="name">{{name}}</option>
  </select>
</div>

  
  `,
})
export class MetricsSelectorComponent {
  @Input() drivers: Array<Driver> = [];
  @Input() metricNames: Array<string> = [];
  @Output()  onDriverSelect: EventEmitter<number> = <EventEmitter<number>> new EventEmitter();
  @Output()  onMetricSelect: EventEmitter<string> = <EventEmitter<string>> new EventEmitter();
  driverId: number;
  metricName: string;
  constructor() {}

  onDriverChange(id:number) {
    this.metricName = null;
    this.onDriverSelect.emit(id);
  }

  onMetricNameChange(name:string) {
    this.driverId = null;
    this.onMetricSelect.emit(name);
  }
}
