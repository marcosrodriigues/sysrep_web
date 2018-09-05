import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homenageado',
  templateUrl: './homenageado.component.html',
  styleUrls: ['./homenageado.component.css']
})
export class HomenageadoComponent implements OnInit {

  homenageado: any = {
    telefone: [{}],
    email: [{}]
  }

  constructor() { }

  ngOnInit() {
  }

  addEmail() {
    this.homenageado.email.push({});
  }

  removeEmail(e) {
    let index = this.homenageado.email.indexOf(e);

    if (index >= 0) {
      this.homenageado.email.splice(index, 1);
    }
  }

  addTelefone() {
    this.homenageado.telefone.push({});
  }

  removeTelefone(e) {
    let index = this.homenageado.telefone.indexOf(e);

    if (index >= 0) {
      this.homenageado.telefone.splice(index, 1);
    }
  }


}
