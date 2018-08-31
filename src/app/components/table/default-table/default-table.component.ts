import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() section: string = "";

  constructor(private router : Router) { 
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

  edit(id) {
    //this.router.navigate
    //this.router.navigate[section];
  }

  remove(id) {
    console.log(id);
  }

}
