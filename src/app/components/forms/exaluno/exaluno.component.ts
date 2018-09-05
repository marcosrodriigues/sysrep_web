import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exaluno',
  templateUrl: './exaluno.component.html',
  styleUrls: ['./exaluno.component.css']
})
export class ExalunoComponent implements OnInit {

  exaluno: any = {
    telefone: [{}],
    email: [{}]
  }

  constructor() { }

  ngOnInit() {
  }

  addEmail() {
    this.exaluno.email.push({});
  }

  removeEmail(e) {
    let index = this.exaluno.email.indexOf(e);

    if (index >= 0) {
      this.exaluno.email.splice(index, 1);
    }
  }

  addTelefone() {
    this.exaluno.telefone.push({});
  }

  removeTelefone(e) {
    let index = this.exaluno.telefone.indexOf(e);

    if (index >= 0) {
      this.exaluno.telefone.splice(index, 1);
    }
  }

}
