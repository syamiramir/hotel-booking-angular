import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../../../models/room.model';

@Component({
  selector: 'app-room-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-card.html',
  styleUrls: ['./room-card.scss']
})
export class RoomCardComponent {
  @Input() room!: Room;
  @Output() book = new EventEmitter<Room>();

  bookRoom() {
    this.book.emit(this.room);
  }
}
