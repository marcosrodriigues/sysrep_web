import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-despesa-caixinha',
  templateUrl: './despesa-caixinha.component.html',
  styleUrls: ['./despesa-caixinha.component.css']
})
export class DespesaCaixinhaComponent implements OnInit {


  public pieChartLabels:string[] = ['AirBnb', 'Ex-Aluno', 'Garagem', 'Tesouraria', 'X'];
  public pieChartData:number[] = [300, 500, 200, 200, 300];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
