import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Room } from '../../../models/room.model';
import { RoomService } from '../../../services/room.service';
import { ToastService } from '../../../shared/toast/toast.service';

@Component({
  selector: 'app-book-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-modal.html',
  styleUrls: ['./book-modal.scss']
})
export class BookModalComponent {
  @Input() room!: Room;
  @Output() close = new EventEmitter<void>();

  bookingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private roomService: RoomService,
    private toastService: ToastService
  ) {
    this.bookingForm = this.fb.group({
      guestName: ['', Validators.required],
      nights: [1, [Validators.required, Validators.min(1)]],
    });
  }

  submitBooking(): void {
    if (this.bookingForm.valid) {
      this.roomService.bookRoom(this.room.id);

      this.toastService.show({
        type: 'success',
        text: `✅ ${this.bookingForm.value.guestName} booked ${this.room.name} for ${this.bookingForm.value.nights} night(s)!`
      });

      this.close.emit();
    }
  }
}
