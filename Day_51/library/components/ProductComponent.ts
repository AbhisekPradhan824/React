import { ProductTemplate } from "../templates/ProductTemplate";
export class ProductComponent extends ProductTemplate {
  Name = "Samsung TV";
  Price: number = 45000.0;
  Qty: number = 2;
  Total(): number {
    return this.Qty * this.Price;
  }
  Print(): void {
    console.log(
      `Name: ${this.Name} \n Price: ${this.Price} \n Qty: ${this.Qty} \n Total: ${this.Total()}`,
    );
  }
}
