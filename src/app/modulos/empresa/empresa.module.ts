import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({ declarations: [
        EmpresaFormComponent
    ], imports: [CommonModule,
        EmpresaRoutingModule,
        ReactiveFormsModule,
        FormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class EmpresaModule { }
