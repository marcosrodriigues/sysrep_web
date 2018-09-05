import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-caixinha',
  templateUrl: './listagem-caixinha.component.html',
  styleUrls: ['./listagem-caixinha.component.css']
})
export class ListagemCaixinhaComponent implements OnInit {

  colunas: any = ["name", "gender"];
  data: any[] = [  
    { "data":{  name:"Janeiro/2018", gender:"Fake dói", id: 15  } },
    { "data":{  name:"Fevereiro/2018", gender:"Bixareu", id: 17  } },
    { "data":{  name:"Março/2018", gender:"Piter", id: 18  } },
    { "data":{  name:"Abril/2018", gender:"Tualinha", id: 20  } },
    { "data":{  name:"Maio/2018", gender:"Xikenliru", id: 22  } },
    { "data":{  name:"Junho/2018", gender:"Versão Brasileira", id: 13  } },
    { "data":{  name:"Julho/2018", gender:"Potinho", id: 14  } },
    { "data":{  name:"Agosto/2018", gender:"Fake Dói", id: 1  } },
    { "data":{  name:"Setembro/2018", gender:"Bixareu", id: 2  } },
    { "data":{  name:"Outubro/2018", gender:"Piter", id: 5  } },
    { "data":{  name:"Novembro/2018", gender:"Tualinha", id: 33  } },
    { "data":{  name:"Dezembro/2018", gender:"Xikenliru", id: 43  } }
  ];
  section: string = 'caixinha';

  constructor() { }

  ngOnInit() {
  }

}
