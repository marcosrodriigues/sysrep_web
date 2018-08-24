import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-exaluno',
  templateUrl: './listagem-exaluno.component.html',
  styleUrls: ['./listagem-exaluno.component.css']
})
export class ListagemExalunoComponent implements OnInit {

  colunas: any = ["name", "gender"];

  data: any[] = [  
    { "data":{  name:"Andrew", gender:"Male", id: 15  }, "edit" : "http://", "remove" : "" },
    { "data":{  "name":"Andrew", "gender":"Male", "id": 2  } },
    { "data":{  "name":"Andrew", "gender":"Male", "id": 3  } },
    { "data":{  "name":"Andrew", "gender":"Male", "id": 4  } },
    { "data":{  "name":"Andrew", "gender":"Male", "id": 12  } },
    { "data":{  "name":"Andrew", "gender":"Male", "id": 6  } },
    { "data":{  "name":"Andrew", "gender":"Male", "id": 7  } },
    { "data":{  "name":"Andrew", "gender":"Male", "id": 8  } },
    { "data":{  "name":"Andrew", "gender":"Male", "id": 9  } },
    { "data":{  "name":"Andrew", "gender":"Male", "id": 10  } },
  ]

  constructor() { }

  ngOnInit() {
  }

}
