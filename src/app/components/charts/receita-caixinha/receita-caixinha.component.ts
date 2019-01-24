import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-receita-caixinha',
  templateUrl: './receita-caixinha.component.html',
  styleUrls: ['./receita-caixinha.component.css']
})
export class ReceitaCaixinhaComponent implements OnInit {

  constructor() { }

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
  
  ngOnInit() {
    
  }

}
