import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualizar-caixinha',
  templateUrl: './visualizar-caixinha.component.html',
  styleUrls: ['./visualizar-caixinha.component.css']
})
export class VisualizarCaixinhaComponent implements OnInit {

  id: number = 0;

  constructor(private activeRoute: ActivatedRoute) { 
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;
    })
  }
  
  ngOnInit() {
  }

}
