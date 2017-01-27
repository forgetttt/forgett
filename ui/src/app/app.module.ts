import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MetricsSelectorComponent} from "./metricsSelector.component";
import {MetricsService} from "./metrics.service";
import {MetricsMapComponent} from "./metricsMap.component";

@NgModule({
  declarations: [
    AppComponent,
    MetricsSelectorComponent,
    MetricsMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MetricsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
