import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualizar-caixinha',
  templateUrl: './visualizar-caixinha.component.html',
  styleUrls: ['./visualizar-caixinha.component.css']
})
export class VisualizarCaixinhaComponent implements OnInit {

  id: number = 0;

  colunas: any = ["categoria", "valor"];
  data: any[] = [  
    { "data":{  categoria:"AirBnb", valor:"300.00", id: 15  } },
    { "data":{  categoria:"Ex-aluno", valor:"500.00", id: 18 },
      "children": [
        { "data":{  categoria:"Macarrão", valor:"300.00", id: 15  } },
        { "data":{  categoria:"Xacrinha", valor:"200.00", id: 15  } }
      ] },
    { "data":{  categoria:"Garagem", valor:"200.00", id: 15  } },
    { "data":{  categoria:"Tesouraria", valor:"200.00", id: 15  } },
  ];
  section: string = 'caixinha';

  constructor(private activeRoute: ActivatedRoute) { 
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;
    })
  }
  
  ngOnInit() {
  }

}
