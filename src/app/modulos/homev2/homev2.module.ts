import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Homev2RoutingModule } from './homev2-routing.module';
import { Homev2IndexComponent } from './homev2-index/homev2-index.component';


@NgModule({
  declarations: [
    Homev2IndexComponent
  ],
  imports: [
    CommonModule,
    Homev2RoutingModule
  ]
})
export class Homev2Module { }
