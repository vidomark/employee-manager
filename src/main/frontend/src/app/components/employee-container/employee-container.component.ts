import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Employee } from 'src/app/models/Employee';
import { ModalState } from 'src/app/models/ModalState';
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
  public form: any;
  public employeeForm: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private uiService: UiService
  ) {
    this.uiService
      .getShowModalSubject()
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

  updateEmployee() {
    this.uiService.openModal(ModalState.UPDATE);
  }

  deleteEmployee(deletedEmployee: Employee) {
    const id = deletedEmployee.id as number;
    this.employeeService.deleteEmployee(id).subscribe();
    this.employees = this.employees.filter(
      (employee) => employee != deletedEmployee
    );
  }

  submitForm(employeeForm: any) {
    console.log(employeeForm);
  }
}
