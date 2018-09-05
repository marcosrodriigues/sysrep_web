import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-homenageado',
  templateUrl: './listagem-homenageado.component.html',
  styleUrls: ['./listagem-homenageado.component.css']
})
export class ListagemHomenageadoComponent implements OnInit {

  colunas: any = ["name", "gender"];
  data: any[] = [  
    { "data":{  name:"Andrew", gender:"Male", id: 15  } },
    { "data":{  "name":"Andrew", "gender":"Male", "id": 2  } },
    { "data":{  "name":"Andrew", "gender":"Male", "id": 3  } },
    { "data":{  "name":"Andrew", "gender":"Male", "id": 4  } },
    { "data":{  "name":"Andrew", "gender":"Male", "id": 12  } },
    { "data":{  "name":"Andrew", "gender":"Male", "id": 6  } },
    { "data":{  "name":"Andrew", "gender":"Male", "id": 7  } },
    { "data":{  "name":"Andrew", "gender":"Male", "id": 8  } },
    { "data":{  "name":"Andrew", "gender":"Male", "id": 9  } },
    { "data":{  "name":"Andrew", "gender":"Male", "id": 10  } },
  ];
  section: string = 'homenageado';

  constructor() { }

  ngOnInit() {
  }

}
