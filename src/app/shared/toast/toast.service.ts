import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ToastMessage {
  type: 'success' | 'error' | 'info' | 'warning';
  text: string;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastSubject = new BehaviorSubject<ToastMessage | null>(null);
  toast$ = this.toastSubject.asObservable();

  show(message: ToastMessage | null, duration: number = 3000) {
    this.toastSubject.next(message);

    if (message) {
      setTimeout(() => {
        this.toastSubject.next(null); // auto-hide
      }, duration);
    }
  }
}
