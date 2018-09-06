import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-receita-presidencia-table',
  templateUrl: './receita-presidencia-table.component.html',
  styleUrls: ['./receita-presidencia-table.component.css']
})
export class ReceitaPresidenciaTableComponent implements OnInit {

  @Input() columns: any = [];
  @Input() data: any = [];
  @Input() section: string = "";

  constructor() { }

  ngOnInit() {
  }

}
