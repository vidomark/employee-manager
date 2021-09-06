import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css'],
})
export class ModalFormComponent implements OnInit {
  @ViewChild('frame') modalFrameRef: ModalDirective;
  @ViewChild('closeModalRef') closeModalRef: ElementRef;
  @Input() showModal: boolean;
  validatingForm: FormGroup;
  title: string;

  constructor(
    private renderer: Renderer2,
    private uiService: UiService,
    private employeeService: EmployeeService
  ) {
    uiService.getModalTitleSubject().subscribe((title) => (this.title = title));

    this.renderer.listen('window', 'click', (event: Event) => {
      // If modal is closed
      if (!this.modalFrameRef.isShown) {
        this.uiService.closeModal();
        this.modalFrameRef.hide();
      }
    });
  }

  ngOnChanges(changes: any) {
    this.showModal = changes.showModal.currentValue;
    if (this.showModal) {
      this.modalFrameRef.show();
    }
  }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      //contactFormModalName: new FormControl('', Validators.required),
      contactFormModalName: new FormControl(''),
      contactFormModalEmail: new FormControl(''),
      contactFormModalOccupation: new FormControl(''),
      contactFormModalPhone: new FormControl(''),
      contactFormModalImageUrl: new FormControl(''),
    });
    this.validatingForm.valueChanges.subscribe();
  }

  submitForm() {
    if (this.title === 'Add Employee') {
      const newEmployee = {
        name: this.contactFormModalName.value,
        email: this.contactFormModalEmail.value,
        occupation: this.contactFormModalOccupation.value,
        phoneNumber: this.contactFormModalPhone.value,
        imageUrl: this.contactFormModalImageUrl.value,
      };
      this.employeeService
        .addEmployee(newEmployee)
        .subscribe((employee) => console.log(employee));
    } else if (this.title === 'Update Employee') {
      console.log('UPDATE');
    }
  }

  get contactFormModalName() {
    return this.validatingForm.get('contactFormModalName') as FormControl;
  }

  get contactFormModalEmail() {
    return this.validatingForm.get('contactFormModalEmail') as FormControl;
  }

  get contactFormModalOccupation() {
    return this.validatingForm.get('contactFormModalOccupation') as FormControl;
  }

  get contactFormModalPhone() {
    return this.validatingForm.get('contactFormModalPhone') as FormControl;
  }

  get contactFormModalImageUrl() {
    return this.validatingForm.get('contactFormModalImageUrl') as FormControl;
  }
}
