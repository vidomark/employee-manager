import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-employee-container',
  templateUrl: './employee-container.component.html',
  styleUrls: ['./employee-container.component.css'],
})
export class EmployeeContainerComponent implements OnInit {
  public employees: Employee[];
  public showModal: boolean;

  constructor(
    private employeeService: EmployeeService,
    private uiService: UiService
  ) {
    this.uiService
      .modalSubject()
      .subscribe((showModal) => (this.showModal = showModal));
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  updateEmployee(employee: Employee) {
    this.uiService.openModal();
  }
}
