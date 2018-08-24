import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

declare var $ : any;

@Component({
  selector: 'app-ex-aluno-table',
  templateUrl: './ex-aluno-table.component.html',
  styleUrls: ['./ex-aluno-table.component.css']
})
export class ExAlunoTableComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtColumns: DataTables.ColumnSettings = {};

  exalunos: any[] = [
    {nome: 'Marcos', apelido: "Fake", email: "m@g.c",phone: "phone"},
    {nome: 'Marcos', apelido: "Fake", email: "m@g.c",phone: "phone"}
  ];
  
  constructor() { }

  ngOnInit() {
    console.log(this.exalunos);
    this.configureDataTable();
    $('#datatable').dataTable(this.dtOptions);
  }

  configureDataTable() {
    this.dtOptions = {
      pagingType: 'first_last_numbers',
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json',
        searchPlaceholder: 'Pesquise por todos os campos'
      },
      data: this.exalunos,
      pageLength: 25,
      lengthChange: true,
      autoWidth: true,
    };
  }
}
