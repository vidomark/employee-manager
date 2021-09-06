import { Injectable, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showModal = false;
  private subject = new BehaviorSubject<boolean>(this.showModal);

  constructor() {}

  openModal(): void {
    this.showModal = true;
    this.subject.next(this.showModal);
  }

  closeModal(): void {
    this.showModal = false;
    this.subject.next(this.showModal);
  }

  modalSubject(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
