import {Component, Input, Output, EventEmitter} from "@angular/core";
import {MetricsService, Driver} from "./metrics.service";
import 'rxjs/add/operator/first'
/**
 * Created by tamary on 1/27/2017.
 */
@Component({
  selector: 'metrics-selector',
  template:`
<h1>
  metrics
</h1>
<select [(ngModel)]="driverId" (ngModelChange)="onDriverChange($event)">
    <option *ngFor="let driver of drivers" [value]="driver.id">{{driver.name}}</option>
</select>
  
  `,
})
export class MetricsSelectorComponent {
  @Input() drivers: Array<Driver> = [];
  @Output()  onDriverSelect: EventEmitter<string> = <EventEmitter<string>> new EventEmitter();
  driverId:number;
  constructor() {}

  onDriverChange(id:string) {
    console.log(id);
    this.onDriverSelect.emit(id);
  }
}
