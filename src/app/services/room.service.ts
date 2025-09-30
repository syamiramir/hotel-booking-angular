import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private readonly STORAGE_KEY = 'rooms';

  private rooms$: BehaviorSubject<Room[]>;

  constructor() {
    // Load from localStorage or fallback to default
    const storedRooms = localStorage.getItem(this.STORAGE_KEY);
    this.rooms$ = new BehaviorSubject<Room[]>(
      storedRooms ? JSON.parse(storedRooms) : this.getDefaultRooms()
    );
  }

  /** Return observable for components to subscribe */
  getRooms(): Observable<Room[]> {
    return this.rooms$.asObservable();
  }

  /** Book a room by ID */
  bookRoom(id: number): void {
    const updated = this.rooms$.value.map(room =>
      room.id === id ? { ...room, available: false } : room
    );
    this.updateRooms(updated);
  }

  /** Reset rooms (for testing/demo) */
  resetRooms(): void {
    const defaults = this.getDefaultRooms();
    this.updateRooms(defaults);
  }

  /** Save & broadcast changes */
  private updateRooms(rooms: Room[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(rooms));
    this.rooms$.next(rooms);
  }

  /** Default mock data */
  private getDefaultRooms(): Room[] {
    return [
      { id: 1, name: 'Deluxe Single', type: 'Single', price: 100, available: true },
      { id: 2, name: 'Executive Double', type: 'Double', price: 180, available: true },
      { id: 3, name: 'Presidential Suite', type: 'Suite', price: 350, available: true }
    ];
  }
}

