import { Injectable, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { ModalState } from 'src/app/models/ModalState';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showModal = false;
  private showModalSubject = new BehaviorSubject<boolean>(this.showModal);
  private modalTitle: string;
  private modalTitleSubject = new Subject<string>();

  constructor() {}

  openModal(modalState: ModalState): void {
    this.modalTitle =
      modalState === ModalState.ADD ? 'Add Employee' : 'Update Employee';
    this.showModal = true;

    this.showModalSubject.next(this.showModal);
    this.modalTitleSubject.next(this.modalTitle);
  }

  closeModal(): void {
    this.showModal = false;
    this.showModalSubject.next(this.showModal);
  }

  getShowModalSubject(): Observable<boolean> {
    return this.showModalSubject.asObservable();
  }

  getModalTitleSubject(): Observable<string> {
    return this.modalTitleSubject.asObservable();
  }
}
