import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-amigo',
  templateUrl: './listagem-amigo.component.html',
  styleUrls: ['./listagem-amigo.component.css']
})
export class ListagemAmigoComponent implements OnInit {

  colunas: any = ["Nome", "Email", "Telefone"];
  dados: any = [
    {nome: "Marcos", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", email: "m@g.c",phone: "phone"},
    {nome: "Marcos", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", email: "m@g.c",phone: "phone"},
    {nome: "Marcos", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", email: "m@g.c",phone: "phone"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
