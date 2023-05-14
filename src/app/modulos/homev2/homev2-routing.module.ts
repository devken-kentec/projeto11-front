import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homev2IndexComponent } from './homev2-index/homev2-index.component';

const routes: Routes = [
  { path: '', component:Homev2IndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Homev2RoutingModule { }
