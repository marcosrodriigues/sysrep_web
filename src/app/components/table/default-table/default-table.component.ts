import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-default-table',
  templateUrl: './default-table.component.html',
  styleUrls: ['./default-table.component.css'],
  inputs: ['columns', 'data']
})
export class DefaultTableComponent implements OnInit {

  @Input() columns: any = [];
  @Input() data: any = [];
  @Input() baseUrl: string = "";

  constructor() { 
  }

  ngOnInit() {
   
  }

  onNodeSelect() {
    console.log('Node select');
  }

  onNodeUnselect() {
    console.log('Node unselect');
  }

  onNodeExpand() {
    console.log('Node expand');
  }

  onNodeCollapse() {
    console.log('Node collapse');
  }

  onContextMenuSelect() {
    console.log('Context menu select');
  }
}
