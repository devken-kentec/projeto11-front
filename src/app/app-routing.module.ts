import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: ()=> import('./modulos/home/home.module').then(h => h.HomeModule) },
  { path: 'empresa', loadChildren: ()=> import('./modulos/empresa/empresa.module').then(e => e.EmpresaModule) },
  { path: 'perfil', loadChildren: ()=> import('./modulos/perfil/perfil.module').then(p => p.PerfilModule) },
  { path: 'homev2', loadChildren: ()=> import('./modulos/homev2/homev2.module').then(h2 => h2.Homev2Module) },
  { path: 'home-empresa', loadChildren: ()=> import('./modulos/home-empresa/home-empresa.module').then(he => he.HomeEmpresaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
