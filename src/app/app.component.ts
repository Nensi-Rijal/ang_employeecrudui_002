import { Component, OnInit } from '@angular/core';
import { Employee, IEmployee } from './model/employee';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  employeeArr: IEmployee[] = [];
  employeeObject: Employee = new Employee();
  constructor(private empService: EmployeeService) {
    
  }

  ngOnInit(): void {
      this.loadEmployeeData();
  }

  loadEmployeeData(){
    this.empService.getAllEmployeeData().subscribe((data: any) => {
      console.log(data);
      this.employeeArr = data;
    })
  }

  formSubmit(){
    this.empService.createEmployee(this.employeeObject).subscribe((data)=>{
      if(data){
        this.loadEmployeeData();
        alert('Uploaded successfully');
      }
    })
  }

  deleteEmployee(id:string){
    this.empService.DeleteEmployee(id).subscribe((res)=>{
      if(res){
        this.loadEmployeeData();
        alert('DeletedSuccessfully');
      }
    })
  }

  editEmployee(id:string){
    this.empService.getSingleEmployeeData(id).subscribe((res)=>{
      if(res){
        this.employeeObject = res;
      }
    })
  }

  formEdit(id: string){
    this.empService.EditEmployee(id,this.employeeObject).subscribe((res)=>{
      if(res){
        this.loadEmployeeData();
        this.employeeObject = new  Employee();
        alert('data edited successfully');
      }
    })
  }
}
