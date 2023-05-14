import { PerfilViewComponent } from './perfil-view/perfil-view.component';
import { PerfilFormComponent } from './perfil-form/perfil-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "p/:id", component: PerfilFormComponent },
  { path: "view/:id", component: PerfilViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
