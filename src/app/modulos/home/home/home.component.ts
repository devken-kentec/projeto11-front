import { HomeConteudoComponent } from '../home-conteudo/home-conteudo.component';
import { HomeEmpresaComponent } from '../home-empresa/home-empresa.component';
import { HomePessoasComponent } from '../home-pessoas/home-pessoas.component';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [HomeConteudoComponent, HomeEmpresaComponent, HomePessoasComponent]
})
export class HomeComponent implements OnInit {

  mostrarConteudo: boolean = false;
  nome: string = 'Lorenzo';

  constructor(private authSerice: AuthService) { }

  ngOnInit(): void {
    this.authSerice.mostrarPostagemEmitter.subscribe((retorno: boolean)=> {
      this.mostrarConteudo = retorno;
  });
  }

}
