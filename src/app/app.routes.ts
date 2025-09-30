import { Routes } from '@angular/router';
import { RoomListComponent } from './features/rooms/room-list/room-list';

export const routes: Routes = [
  { path: '', redirectTo: 'rooms', pathMatch: 'full' }, // default route
  { path: 'rooms', component: RoomListComponent },
  { path: '**', redirectTo: 'rooms' } // wildcard fallback
];

