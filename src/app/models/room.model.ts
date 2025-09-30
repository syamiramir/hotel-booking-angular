export interface Room {
  id: number;
  name: string;
  type: string;   // e.g., "Single", "Double", "Suite"
  price: number;
  available: boolean;
}
