import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { Occupation } from 'src/app/models/Occupation';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Output() onUpdateEmployee = new EventEmitter<Employee>();
  @Output() onDeleteEmployee = new EventEmitter<Employee>();
  occupationString: string;

  constructor() {}

  ngOnInit(): void {
    // Capitalize occupation
    this.occupationString =
      this.employee.occupation.toString().slice(0, 1).toUpperCase() +
      this.employee.occupation.toString().slice(1).toLowerCase();
  }

  updateEmployee(employee: Employee) {
    this.onUpdateEmployee.emit(employee);
  }

  deleteEmployee(employee: Employee) {
    this.onDeleteEmployee.emit(employee);
  }
}
