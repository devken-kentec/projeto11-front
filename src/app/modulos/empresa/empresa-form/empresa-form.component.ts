import { EmpresaService } from './../shared/empresa.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Grupo {
  value: string;
  viewValue: string;
}

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
                  grupo: ['',[]],
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

  gruposSelect: Grupo[] = [
    {value: 'Bebidas', viewValue: 'Bebidas'},
    {value: 'Alimentação', viewValue: 'Alimentação'},
    {value: 'Roupas', viewValue: 'Roupas'},
    {value: 'Calçados', viewValue: 'Calçados'},
    {value: 'Medicamentos', viewValue: 'Medicamentos'},
    {value: 'Saúde', viewValue: 'Saúde'},
    {value: 'Esportes', viewValue: 'Esportes'},
    {value: 'Serviços', viewValue: 'Serviços'},
    {value: 'Utensílios', viewValue: 'Utensílios'},
    {value: 'Ferramentas', viewValue: 'Ferramentas'},
    {value: 'Construção', viewValue: 'Construção'},
    {value: 'Educação', viewValue: 'Educação'},
    {value: 'Papelarias', viewValue: 'Papelarias'},
    {value: 'Pets', viewValue: 'Pets'},
    {value: 'Agro', viewValue: 'Agro'}
  ]

  onSubmit(){
    const empresa = this.empresaForm.value;
    if(this.empresaForm.valid){
      this.empresaService.create(empresa).subscribe(
        success=> { console.log("Salvo com Sucesso!")}
      );
    }
  }

}
