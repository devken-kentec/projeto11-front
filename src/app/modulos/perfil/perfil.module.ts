import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilFormComponent } from './perfil-form/perfil-form.component';
import { PerfilViewComponent } from './perfil-view/perfil-view.component';


@NgModule({
  declarations: [
    PerfilFormComponent,
    PerfilViewComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class PerfilModule { }
