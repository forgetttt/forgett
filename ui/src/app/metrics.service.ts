import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map'
/**
 * Created by tamary on 1/27/2017.
 */


export interface Coordinates {
  lat:number,
  lng:number
}

export interface Coordinates {
  lat:number,
  lng:number
}
export interface Driver {
  id:number,
  name:string
}

@Injectable()
export class MetricsService {
  constructor(private http: Http) {
  }

  getDrivers():Observable<Array<Driver>> {
    return this.http.get('/api/drivers').map((x:Response)=>x.json() as Array<Driver>);
  }

  getMetricsByDriver(driverId: number):Observable<Array<Coordinates>> {
    return this.http.get(`/api/drivers/${driverId}/metrics`).map((x:Response)=>x.json() as Array<Coordinates>);
  }
}
