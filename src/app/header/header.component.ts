import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  public title:string="Employee Payroll";


 
  ngOnInit(): void {
  }

  
  onDashboard(){
    this.router.navigate(["dashboard"]);
  }

  
  onForm(){
    this.router.navigate(["form"]);
  }
}