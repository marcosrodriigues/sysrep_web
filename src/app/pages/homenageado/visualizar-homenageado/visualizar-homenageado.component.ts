import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualizar-homenageado',
  templateUrl: './visualizar-homenageado.component.html',
  styleUrls: ['./visualizar-homenageado.component.css']
})
export class VisualizarHomenageadoComponent implements OnInit {

  id: number = 0;

  constructor(private activeRoute: ActivatedRoute) { 
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;
    })
  }

  ngOnInit() {
  }

}
