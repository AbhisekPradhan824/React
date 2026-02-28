import { ProductContract } from "../contracts/ProductContract";
export abstract class ProductTemplate implements ProductContract {
  Name: string = "";
  Price: number = 0;
  Qty: number = 0;
  abstract Total(): number;
  abstract Print(): void;
}
