import { Router } from '@angular/router';
import { AmigoService } from './../../amigos/shared/amigo.service';
import { Usuario } from './../shared/usuario';
import { TipoPostagem } from './../shared/tipo-postagem';
import { AuthService } from './../../auth/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/home.service';
import { GlobalService } from '../../shared/global.service';
import { Amigo } from '../../amigos/shared/amigo';

@Component({
  selector: 'app-home-pessoas',
  templateUrl: './home-pessoas.component.html',
  styleUrls: ['./home-pessoas.component.css'],
  preserveWhitespaces: true
})

export class HomePessoasComponent implements OnInit {

  listarAmigo: boolean = false;
  aceite: boolean = false;
  idUsuario: number = 0;
  nomeUsuario: string = "";
  btnCriarConta: boolean = true;
  componentPessoas: boolean = false;
  tiposPostagens: TipoPostagem[] = [];
  amigos: Usuario[] = [];
  listaAmigos: Amigo[] = [];

  cadastroForm = this.fb.group({
    dataDeNascimento: ['',[Validators.required]],
    nome: ['',[Validators.required]],
    sobreNome: ['',[Validators.required]],
    email: ['',[Validators.required]],
    cep: ['',[Validators.required]],
    senha: ['',[Validators.required]],
    status: ['',[]],
    confirmarSenha: ['', [Validators.required]],
    termoDeUso: ['',[Validators.required]]
  });

  pesquisaForm = this.fb.group({
     pesquisa: ['',[]]
  });

  postagemForm = this.fb.group({
    titulo: ['',[]],
    mensagem: ['',[]],
    tipoPostagem: ['',[Validators.required]],
    visibilidade: ['',[]],
    idUsuario: ['',[]],
    status: ['',[]],
    link: ['',[]]
  });

  loginForm = this.fb.group({
    email: ['',[]],
    senha: ['', []]
  });

  constructor(private fb: FormBuilder,
              private homeService: HomeService,
              private globalService: GlobalService,
              private authService: AuthService,
              private amigoService: AmigoService,
              private router: Router) { }

  ngOnInit(): void {
    this.logar();
    this.selectTipoPostagem();
  }

  selectTipoPostagem():void {
    this.homeService.selectTipoPostagem().subscribe(
      res => this.tiposPostagens = res
    );
  }

  sairListaAmigos(): void {
    this.listarAmigo = false;
  }

  entrarPerfil(): void {
    this.router.navigate(["/perfil/p", this.idUsuario]);
  }

  entrarPerfilView(): void {
    this.router.navigate(["/perfil/view", this.idUsuario]);
  }

  enviarFormulario(): void {
    this.cadastroForm.get("status")?.setValue("Ativo");
    if(this.cadastroForm.valid){
      if(this.cadastroForm.get("termoDeUso")?.value == true){
        this.homeService.enviarFormulario(this.cadastroForm.value).subscribe(
          success => { this.globalService.saveShow("Enviado com Sucesso!", "Solicitação"),
                       this.cadastroForm.reset() },
          (error: any) => { this.globalService.removeShow("Algo esta Errado", "OPS!") }
        );
      } else {
        this.globalService.removeShow("Termos do Usuário!", "Aceitar")
      }
    }
  }

  enviarPostagem(){
    this.postagemForm.get("idUsuario")?.setValue(this.idUsuario);
    this.postagemForm.get("status")?.setValue("Ativo");
    if(this.postagemForm.valid){
      this.homeService.enviarPostagem(this.postagemForm.value).subscribe((res:any)=>{
          this.cadastroForm.reset();
      });
    }
  }

  limparFormularioPostagem(){
    this.postagemForm.reset();
  }

  logar(){
    if(this.loginForm.valid){
     let login = this.loginForm.value;
      this.globalService.loadByLogin("kennedy_tomazete@outlook.com").subscribe((res: any) => {
        this.idUsuario = res.id;
        this.nomeUsuario = res.nome;
        this.listarAmigos(this.idUsuario);
        if(res != null){
          this.btnCriarConta = false;
          this.componentPessoas = true;
          this.authService.setLoggedIn(this.componentPessoas);
        }});
    }
  }

  buscarPorNome(){
    this.listarAmigo = !this.listarAmigo;
    let nome = this.pesquisaForm.get("pesquisa")?.value;
    this.homeService.buscarPorNome(nome).subscribe((res: any)=>{
      if(res != null){
        this.listarAmigo = true;
      }
      this.amigos = res;
    });
  }

  solicitarAmizade(idAmigo: any){
    let idMeu = this.idUsuario;
    if(idAmigo === idMeu){
      this.globalService.warningShow("Você não pode Solicitar Amizade pra você mesmo! ","OPS!")
    } else {
      this.verSolicitacao(idMeu, idAmigo);
    }
  }

  listarAmigos(id:number){
    this.amigoService.listarAmigos(id).subscribe(
        res => this.listaAmigos = res
    );
  }

  verSolicitacao(idMeu:number, idAmigo: number){
    console.log(idMeu + "-" +idAmigo);
    this.amigoService.verSolicatacao(idMeu, idAmigo).subscribe((res: any)=>{
        if(res == null){
          this.amigoService.solicitarAmizade(idMeu, idAmigo).subscribe(
            success => { this.globalService.saveShow("Solicitada com Sucesso!", "Amizade!") },
            (error: any) => { this.globalService.removeShow("Erro ao Solicitar Amizade!", "Amizade")}
          );
        } else if(res.solicitar == "Amigos"){
          this.globalService.warningShow("Já são Amigos", "Amigos!");
        } else if(res.solicitar == "Solicitando") {
          this.globalService.removeShow("Aguarde o amigo Confirmar!", "Solicitando!")
        }
    });
  }
}
