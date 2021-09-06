import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css'],
})
export class ModalFormComponent implements OnInit, AfterViewInit {
  @ViewChild('frame') modalFrameRef: ModalDirective;
  @ViewChild('closeModalRef') closeModalRef: ElementRef;
  @Input() showModal: boolean;
  validatingForm: FormGroup;
  closeSpanId: string;

  constructor(private renderer: Renderer2, private uiService: UiService) {
    this.renderer.listen('window', 'click', (event: Event) => {
      // If modal is closed
      if (!this.modalFrameRef.isShown) {
        this.uiService.closeModal();
        this.modalFrameRef.hide();
      }
    });
  }

  ngAfterViewInit(): void {
    this.closeSpanId = this.closeModalRef.nativeElement.id;
  }

  ngOnChanges(changes: any) {
    this.showModal = changes.showModal.currentValue;
    if (this.showModal) {
      this.uiService.openModal();
      this.modalFrameRef.show();
    }
  }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      contactFormModalName: new FormControl('', Validators.required),
      contactFormModalEmail: new FormControl('', Validators.email),
      contactFormModalSubject: new FormControl('', Validators.required),
      contactFormModalMessage: new FormControl('', Validators.required),
    });
  }

  get contactFormModalName() {
    return this.validatingForm.get('contactFormModalName') as FormControl;
  }

  get contactFormModalEmail() {
    return this.validatingForm.get('contactFormModalEmail') as FormControl;
  }

  get contactFormModalSubject() {
    return this.validatingForm.get('contactFormModalSubject') as FormControl;
  }

  get contactFormModalMessage() {
    return this.validatingForm.get('contactFormModalMessage') as FormControl;
  }
}
