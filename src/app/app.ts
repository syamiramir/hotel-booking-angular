import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './features/rooms/room-list/room-list';
import { ToastComponent } from './shared/toast/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RoomListComponent, ToastComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {}
