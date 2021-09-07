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
  private modalState: ModalState;
  private modalStateSubject = new Subject<ModalState>();

  constructor() {}

  openModal(modalState: ModalState): void {
    this.modalState = modalState;
    this.showModal = true;

    this.showModalSubject.next(this.showModal);
    this.modalStateSubject.next(this.modalState);
  }

  closeModal(): void {
    this.showModal = false;
    this.showModalSubject.next(this.showModal);
  }

  getShowModalSubject(): Observable<boolean> {
    return this.showModalSubject.asObservable();
  }

  getModalStateSubject(): Observable<ModalState> {
    return this.modalStateSubject.asObservable();
  }
}
