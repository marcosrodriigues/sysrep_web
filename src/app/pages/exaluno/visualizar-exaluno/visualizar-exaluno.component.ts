import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualizar-exaluno',
  templateUrl: './visualizar-exaluno.component.html',
  styleUrls: ['./visualizar-exaluno.component.css']
})
export class VisualizarExalunoComponent implements OnInit {

  id: number = 0;

  constructor(private activeRoute: ActivatedRoute) { 
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;
    })
  }

  ngOnInit() {
    console.log(this.id);
  }

}
