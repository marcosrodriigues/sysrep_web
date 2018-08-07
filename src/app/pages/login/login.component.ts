import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.init();
  }

  init() {
    $('.js-tilt').tilt({
			scale: 1.1
		})
  }  

  login(){
    this.router.navigateByUrl('/dashboard');
  }
}
