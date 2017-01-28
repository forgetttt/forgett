import {Component, Input} from "@angular/core";
import {Coordinates} from "./metrics.service";
/**
 * Created by tamary on 1/27/2017.
 */
@Component({
  selector: 'metrics-map',
  template:`
<h1>
 map
</h1>
<div *ngIf="coordinates.length == 0">no metrics for selection</div>
<sebm-google-map  *ngIf="coordinates.length > 0" class="sebm-google-map-container" [latitude]="coordinates[0].lat" [longitude]="coordinates[0].lng" [zoom]="3"  >
  <sebm-google-map-marker [latitude]="coord.lat" [longitude]="coord.lng"  *ngFor="let coord of coordinates" ></sebm-google-map-marker>
</sebm-google-map>
  `,
  styles:[ `
.sebm-google-map-container {
  height: 300px;
}
`]
})

export class MetricsMapComponent{
  @Input() coordinates:Array<Coordinates> = [];
  constructor() {}

}
