import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/Model/employee';
import { NgModel } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  employee: Employee = new Employee("", "", "", 0, "", "", "");


  Id: any = this.route.snapshot.paramMap.get("Id")


  
  constructor(private router: Router, private service: EmployeeService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    
    this.service.getEmployeeById(this.Id).subscribe((getData: any) => {
      console.log(getData.data);
      this.employee = getData.data;
    })
  }

  
  onCancel() {
    this.router.navigate(["dashboard"]);
  }

  onSubmit(form: NgForm) {
    console.log(this.employee);
  }

  getVal(value: String) {
    console.log(value);
    this.employee.department = value;
  }


   
  addEmployeeData() {
    console.log(this.employee);
    this.service.insertEmployee(this.employee).subscribe(data => {
      console.log("data is saved successfullly")
      this.router.navigate(["dashboard"])
    })
  }

    
  updateEmployeeData() {
    this.service.updateEmployeeById(this.employee, this.Id).subscribe(data => {
      console.log("data updated succesfully");
      this.router.navigate(["dashboard"])
    });
  }

  getAllEmployeeData() {
    this.service.getEmployee().subscribe(data => {
      console.log("data retrieved successfully");
      this.router.navigate(["dashboard"])
    })
  }

}