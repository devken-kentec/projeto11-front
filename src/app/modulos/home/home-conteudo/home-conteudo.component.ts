import { Postagem } from './../shared/postagem';
import { HomeService } from './../shared/home.service';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../shared/global.service';

@Component({
  selector: 'app-home-conteudo',
  templateUrl: './home-conteudo.component.html',
  styleUrls: ['./home-conteudo.component.css']
})
export class HomeConteudoComponent implements OnInit {

  postagens: Postagem[] =[];

  constructor(private homeService: HomeService, public globalService: GlobalService) { }

  ngOnInit(): void {
    this.listarPostagem();
  }

  listarPostagem(){
    this.homeService.listarPostagem().subscribe(
      res => this.postagens = res
    );
  }
}
