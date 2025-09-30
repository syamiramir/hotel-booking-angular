import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast.service';
import { Observable } from 'rxjs';
import { ToastMessage } from './toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrls: ['./toast.scss']
})
export class ToastComponent {
  message$!: Observable<ToastMessage | null>;

  constructor(public toastService: ToastService) {
    // ✅ now toastService is initialized before use
    this.message$ = this.toastService.toast$;
  }

  closeToast() {
    this.toastService.show(null);
  }
}
