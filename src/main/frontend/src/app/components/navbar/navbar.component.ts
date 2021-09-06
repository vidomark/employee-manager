import { Component, OnInit } from '@angular/core';
import { ModalState } from 'src/app/models/ModalState';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private uiService: UiService) {}

  ngOnInit(): void {}

  addEmployee() {
    this.uiService.openModal(ModalState.ADD);
  }
}
