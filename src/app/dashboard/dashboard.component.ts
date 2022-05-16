import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  
  constructor(private router: Router, private service: EmployeeService) { }
  employee: any;


  ngOnInit(): void {

    
    this.service.getEmployee().subscribe(data => {
      console.log(data);
      this.employee = data;
    });
    console.log(this.employee)
  }

  
  onAddUser() {
    
    this.router.navigate(["form"]);
  }

  
  deleteById(Id: number) {
    this.service.deleteEmployee(Id).subscribe(data => {
      
      console.log("Data is deleted")
      
      window.location.reload()
    });
  }

  
  editById(Id: number, employee: any) {
    this.router.navigate(['update', Id]);
  }

}