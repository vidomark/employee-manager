import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { Occupation } from 'src/app/models/Occupation';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;
  occupationString: string;

  constructor() {}

  ngOnInit(): void {
    // Capitalize occupation
    this.occupationString =
      this.employee.occupation.toString().slice(0, 1).toUpperCase() +
      this.employee.occupation.toString().slice(1).toLowerCase();
  }
}
