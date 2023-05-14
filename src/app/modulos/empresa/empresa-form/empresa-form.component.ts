import { EmpresaService } from './../shared/empresa.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.css'],
  preserveWhitespaces: true
})
export class EmpresaFormComponent implements OnInit {

  empresaForm: FormGroup;

  constructor(private fb: FormBuilder,
              private empresaService: EmpresaService) {
                this.empresaForm = this.fb.group({
                  id: [null, []],
                  nomeFantasia: [''],
                  razaoSocial: ['',[]],
                  dataConstituicao: ['',[]],
                  cnpj: ['',[]],
                  inscricaoEstadual: ['',[]],
                  inscricaoMunicipal: ['',[]],
                  regimeTributario: ['',[]],
                  cep: ['',[]],
                  endereco: ['',[]],
                  numero: ['',[]],
                  complemento: ['',[]],
                  bairro: ['',[]],
                  municipio: ['',[]],
                  estado: ['',[]],
                  ramoDeAtividade: ['',[]],
                  telefone: ['',[]],
                  telefone2: ['',[]],
                  whatsapp: ['',[]],
                  celular: ['',[]],
                  email: ['',[]],
                  website: ['',[]],
                  redeSocial: ['',[]],
                  redeSocial2: ['',[]],
                  redeSocial3: ['',[]],
                  dataCadastro: ['',[]],
                  statusEmpresa: ['',[]]
                });
              }

  ngOnInit(): void {
  }

  onSubmit(){
    const empresa = this.empresaForm.value;
    if(this.empresaForm.valid){
      this.empresaService.create(empresa).subscribe(
        success=> { console.log("Salvo com Sucesso!")}
      );
    }
  }

}
