import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';
import { Subject } from 'rxjs';
import { UiService } from 'src/app/services/ui/ui.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css'],
})
export class ModalFormComponent implements OnInit {
  @ViewChild('frame') modalFrameRef: ModalDirective;
  @ViewChild('closeModalRef') closeModalRef: ElementRef;
  @Output() onSubmitForm = new EventEmitter<FormGroup>();
  @Input() showModal: boolean;
  private subject = new Subject();
  employeeForm: FormGroup;
  title: string;

  constructor(private renderer: Renderer2, private uiService: UiService) {
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
    this.employeeForm = new FormGroup({
      //contactFormModalName: new FormControl('', Validators.required),
      name: new FormControl(''),
      email: new FormControl(''),
      occupation: new FormControl(''),
      phoneNumber: new FormControl(''),
      imageUrl: new FormControl(''),
    });

    this.subject
      .pipe(map(() => this.employeeForm.value))
      .subscribe((formData) => this.onSubmitForm.emit(formData));
  }

  submitForm(form: FormGroup): void {
    this.subject.next();
  }

  get name() {
    return this.employeeForm.get('name') as FormControl;
  }

  get email() {
    return this.employeeForm.get('email') as FormControl;
  }

  get occupation() {
    return this.employeeForm.get('occupation') as FormControl;
  }

  get phoneNumber() {
    return this.employeeForm.get('phoneNumber') as FormControl;
  }

  get imageUrl() {
    return this.employeeForm.get('imageUrl') as FormControl;
  }
}
