export interface ProductContract {
  Name: string;
  Price: number;
  Qty: number;
  Total(): number;
  Print(): void;
}
