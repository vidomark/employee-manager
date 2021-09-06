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
  @Output() onChangeEvent = new EventEmitter<FormGroup>();
  @Input() showModal: boolean;
  private subject = new Subject(); // For emitting form data
  validatingForm: FormGroup;
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
    this.validatingForm = new FormGroup({
      //contactFormModalName: new FormControl('', Validators.required),
      contactFormModalName: new FormControl(''),
      contactFormModalEmail: new FormControl(''),
      contactFormModalOccupation: new FormControl(''),
      contactFormModalPhone: new FormControl(''),
      contactFormModalImageUrl: new FormControl(''),
    });

    this.subject
      .pipe(map(() => this.validatingForm.value))
      .subscribe((formData) => this.onChangeEvent.emit(formData));
  }

  submitForm(form: FormGroup): void {
    this.subject.next();
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
