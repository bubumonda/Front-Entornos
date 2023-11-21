import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewChecked {

  constructor(
    private router:Router
  ) { }
  ngAfterViewChecked(): void {
    console.log(localStorage.getItem('token'));

    if(!localStorage.getItem('token')){
      this.router.navigateByUrl('/auth/login');
    }
  }

  ngOnInit(): void {
  }



}
