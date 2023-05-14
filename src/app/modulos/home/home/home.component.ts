import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mostrarConteudo: boolean = false;

  constructor(private authSerice: AuthService) { }

  ngOnInit(): void {
    this.authSerice.mostrarPostagemEmitter.subscribe((retorno: boolean)=> {
      this.mostrarConteudo = retorno;
  });
  }

}
