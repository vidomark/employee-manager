import { Component, OnInit } from '@angular/core';
import { ModalState } from 'src/app/models/ModalState';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { UiService } from 'src/app/services/ui/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private uiService: UiService, private router: Router) {}

  ngOnInit(): void {}

  addEmployee(): void {
    this.uiService.openModal(ModalState.ADD);
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
