import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeEmpresaRoutingModule } from './home-empresa-routing.module';
import { HomeEmpresaComponent } from './home-empresa/home-empresa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


@NgModule({ declarations: [
        HomeEmpresaComponent
    ], imports: [CommonModule,
        HomeEmpresaRoutingModule,
        ReactiveFormsModule,
        FormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class HomeEmpresaModule { }
