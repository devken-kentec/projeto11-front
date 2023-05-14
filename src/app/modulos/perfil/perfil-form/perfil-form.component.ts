import { Amigo } from './../../amigos/shared/amigo';
import { FormBuilder } from '@angular/forms';
import { PerfilService } from './../shared/perfil.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Perfil } from '../shared/perfil';
import { Postagem } from '../../home/shared/postagem';
import { GlobalService } from '../../shared/global.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.css']
})
export class PerfilFormComponent implements OnInit {

  postagens: Postagem[] = [];
  amigos: Amigo[] = [];
  amigosSolicitando: Amigo[] = [];
  render: SafeResourceUrl = 0;

    perfilForm = this.fb.group({
      id: ['',[]],
      nome: ['',[]],
      sobreNome: ['',[]],
      dataDeNascimento: ['',[]],
      email: ['',[]],
      cep: ['',[]],
      senha: ['',[]],
      setor: ['',[]],
      status: ['',[]],
      confirmarSenha: ['', []],
      termoDeUso: ['',[]],
      foto: ['',[]],
      escola: ['',[]],
      faculdade: ['',[]],
      trabalho: ['',[]],
      estadoCivil: ['',[]],
      telefone: ['',[]],
      idComplementar: ['',[]]
  });

  constructor(private route: ActivatedRoute,
              private perfilService: PerfilService,
              private fb: FormBuilder,
              public globalService: GlobalService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.mostrarUsuario(params.id);
    this.findByPostagemUsuarioId(params.id);
    this.findByAmigoUsuarioId(params.id);
    this.findByAmigoSolicitandoId(params.id);
  }

  mostrarUsuario(id: number){
    this.perfilService.findById(id).subscribe((res: any)=>{
      this.updatePerfil(res);
      this.render = this.sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,${res.foto}`),
      this.carragarDadosComplementares(res.id);
    });
  }

  updatePerfil(perfil: Perfil): void{
    this.perfilForm.patchValue(perfil);
  }

  carragarDadosComplementares(id: number){
    this.perfilService.findByDadosComplementares(id).subscribe((res: any)=>{
      if(res != null){
        this.perfilForm.get("idComplementar")?.setValue(res.idComplementar);
        this.perfilForm.get("escola")?.setValue(res.escola);
        this.perfilForm.get("faculdade")?.setValue(res.faculdade);
        this.perfilForm.get("trabalho")?.setValue(res.trabalho);
        this.perfilForm.get("estadoCivil")?.setValue(res.estadoCivil);
        this.perfilForm.get("telefone")?.setValue(res.telefone);
      }
    });
  }

  findByPostagemUsuarioId(id: number){
    this.perfilService.findByPostagemUsuarioId(id).subscribe(
      res => this.postagens = res
    );
  }

  findByAmigoUsuarioId(id: number){
    this.perfilService.findByAmigosUsuarioId(id).subscribe(
      res => this.amigos = res
    );
  }

  findByAmigoSolicitandoId(id: number){
    this.perfilService.findByAmigosSolicitacaoId(id).subscribe(
      res => this.amigosSolicitando = res
    );
  }

  alterarPerfilUsuario(){
    if(this.perfilForm.valid){
      let perfil = this.perfilForm.value;
      this.perfilService.updatePerfil(perfil).subscribe(
        success => { this.globalService.saveShow("Alterado com Sucesso!", "Perfil") },
        (error: any) => { this.globalService.removeShow("Algo esta Errado", "OPS!") }
      );
    }
  }

  gravarDadosComplementares(){
    if(this.perfilForm.valid){
      let dadosComplementares = this.perfilForm.value;
      this.perfilService.save(dadosComplementares).subscribe(
        success => { this.globalService.saveShow("Incluidos com Sucesso!", "Dados Complementares") },
        (error: any) => { this.globalService.removeShow("Algo esta Errado", "OPS!") }
      );
    }
  }

  uploadFoto(event: Event){
    const  files = (event.target as HTMLInputElement).files;
    if(files){
      const foto = files[0];
      const formData: FormData = new FormData();
      formData.append("arquivo", foto);
      this.perfilService.upload(this.perfilForm.value.id, formData).subscribe(
        success => {this.globalService.saveShow("Imagem adicionado com Sucesso!", "Perfil")},
        (error: any) => { this.globalService.warningShow("Tamanho ou formato da imagem", "OPS!") }
      );
    }
  }

  adicionarNovaFoto(){

  }

}
