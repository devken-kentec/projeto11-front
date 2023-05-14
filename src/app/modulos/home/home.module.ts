import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeEmpresaComponent } from './home-empresa/home-empresa.component';
import { HomeConteudoComponent } from './home-conteudo/home-conteudo.component';
import { HomePessoasComponent } from './home-pessoas/home-pessoas.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeEmpresaComponent,
    HomeConteudoComponent,
    HomePessoasComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
