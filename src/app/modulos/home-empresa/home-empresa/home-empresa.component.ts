import { Component, Input, OnInit } from '@angular/core';
import { Empresa } from '../../empresa/shared/empresa';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpresaService } from '../../empresa/shared/empresa.service';

@Component({
  selector: 'app-home-empresa',
  templateUrl: './home-empresa.component.html',
  styleUrls: ['./home-empresa.component.css']
})
export class HomeEmpresaComponent implements OnInit {

  buscarForm: FormGroup;
  listaEmpresa: Empresa[] = [];

  constructor(private fb: FormBuilder,
              private empresaService: EmpresaService) {
    this.buscarForm = this.fb.group(
      {
        pesquisa: ['', []]
      }
    );
  }

  ngOnInit(): void {
    this.buscarForm.get('pesquisa')?.setValue([]);
  }


  public buscarEmpresa() {
    const empresa = this.buscarForm.get("pesquisa")?.value;
    if(this.buscarForm.valid){
        this.empresaService.listarEmpresaNome(empresa).subscribe((res: any)=>{
            this.listaEmpresa = res;
        });
    }
  }

}
