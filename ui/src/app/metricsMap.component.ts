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
<div>{{coordinates}}</div>
  `,
})
export class MetricsMapComponent {
  @Input() coordinates:Array<Coordinates>
  constructor() {
  }
}
