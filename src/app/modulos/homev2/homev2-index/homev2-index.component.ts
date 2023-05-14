import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homev2-index',
  templateUrl: './homev2-index.component.html',
  styleUrls: ['./homev2-index.component.css']
})
export class Homev2IndexComponent implements OnInit {

  produtos: any = [
    {
      titulo: "Camisetas",
      imagem: "../assets/camiseta.jpeg",
      cores:  "Branco",
      detalhes: "Entragamos em qualquer lugar",
      preco: "R$ 15,00"
    },
    {
      titulo: "Molinete",
      imagem: "../assets/molinete1.webp",
      cores:  "Preto",
      detalhes: "Entragamos em qualquer lugar",
      preco: "R$ 25,00"
    },
    {
      titulo: "Carritilha",
      imagem: "../assets/care1.jpg",
      cores:  "Preto",
      detalhes: "Entragamos em qualquer lugar",
      preco: "R$ 25,00"
    },
    {
      titulo: "Varas",
      imagem: "../assets/vara2.webp",
      cores:  "Varias",
      detalhes: "Entragamos em qualquer lugar",
      preco: "R$ 25,00"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
