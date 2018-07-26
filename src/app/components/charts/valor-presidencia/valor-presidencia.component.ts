import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { jqxChartComponent } from 'node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';

@Component({
  selector: 'app-valor-presidencia',
  templateUrl: './valor-presidencia.component.html',
  styleUrls: ['./valor-presidencia.component.css']
})
export class ValorPresidenciaComponent implements AfterViewInit {

  @ViewChild('chartPresidencia') myChart: jqxChartComponent;

  constructor() { }

  ngAfterViewInit() {
    this.initChartPresidencia();
  }

  initChartPresidencia() {
    
  }

  data: any[] = [
    { Mês: 'Janeiro', 2018: 100, 2017: 200 },
    { Mês: 'Fevereiro', 2018: 120, 2017: 140 },
    { Mês: 'Março', 2018: 100, 2017: 110 },
    { Mês: 'Abril', 2018: 90, 2017: 135 },
    { Mês: 'Maio', 2018: 70, 2017: 210 },
    { Mês: 'Junho', 2018: 170, 2017: 210 },
    { Mês: 'Julho', 2018: 270, 2017: 350 },
    { Mês: 'Agosto', 2018: 710, 2017: 410 },
    { Mês: 'Setembro', 2018: 230, 2017: 305 },
    { Mês: 'Outubro', 2018: 90, 2017: 135 },
    { Mês: 'Novembro', 2018: 270, 2017: 350 },
    { Mês: 'Dezembro', 2018: 270, 2017: 350 }
  ];

  padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };

    xAxis: any =
    {
      dataField: 'Mês',
      unitInterval: 1,
      tickMarks: { visible: true, interval: 1 },
      gridLinesInterval: { visible: true, interval: 1 },
      valuesOnTicks: false,
      padding: { bottom: 10 }
    };

    valueAxis: any =
    {
        minValue: 0,
        maxValue: 1000,
        title: { text: 'Valor em R$' },
        labels: { formatSettings: { prefix : "RS ", sufix: ",00" } }
    };

    seriesGroups: any[] =
    [
        {
            type: 'splinearea',
            columnsGapPercent: 50,
            alignEndPointsWithIntervals: true,
            series: [
              { dataField: '2017', displayText: '2017', opacity: 1, lineWidth: 2, symbolType: 'squad', fillColorSymbolSelected: 'yellow' },  
              { dataField: '2018', displayText: '2018', opacity: 0.7, lineWidth: 2, symbolType: 'circle', fillColorSymbolSelected: 'red' },
            ]
        }
    ];

}
