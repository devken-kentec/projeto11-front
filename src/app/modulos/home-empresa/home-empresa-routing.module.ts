import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEmpresaComponent } from './home-empresa/home-empresa.component';

const routes: Routes = [
  { path: '', component: HomeEmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeEmpresaRoutingModule { }
