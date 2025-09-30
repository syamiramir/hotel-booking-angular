import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomService } from '../../../services/room.service';
import { RoomCardComponent } from '../room-card/room-card';
import { BookModalComponent } from '../../booking/book-modal/book-modal';
import { Room } from '../../../models/room.model';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RoomCardComponent, BookModalComponent],
  templateUrl: './room-list.html',
  styleUrls: ['./room-list.scss']
})
export class RoomListComponent {
  rooms: Room[] = [];
  filteredRooms: Room[] = [];
  filterText = '';
  selectedRoom: Room | null = null;

  constructor(private roomService: RoomService) {
    // ✅ subscribe using getRooms()
    this.roomService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
      this.applyFilter();
    });
  }

  /** Filter rooms by name or type */
  applyFilter() {
    this.filteredRooms = this.rooms.filter(r =>
      r.name.toLowerCase().includes(this.filterText.toLowerCase()) ||
      r.type.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  /** Open booking modal */
  openBooking(room: Room) {
    this.selectedRoom = room;
  }

  /** Close booking modal */
  closeBooking() {
    this.selectedRoom = null;
  }
}
