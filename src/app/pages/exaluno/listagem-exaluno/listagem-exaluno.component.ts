import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-exaluno',
  templateUrl: './listagem-exaluno.component.html',
  styleUrls: ['./listagem-exaluno.component.css']
})
export class ListagemExalunoComponent implements OnInit {

  colunas: any = ["Nome", "Apelido", "Email", "Telefone"];
  dados: any = [
    {apelido: "Fake", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"},
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"},
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"},
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"},
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"},
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"},
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"},
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"},
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"},
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"}, 
    {nome: "Marcos", apelido: "Fake", email: "m@g.c",phone: "phone"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
