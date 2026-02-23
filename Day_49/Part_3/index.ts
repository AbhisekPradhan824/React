interface ProductContract {
  Name: string;
  Price: number;
  Qty: number;
  Total(): number;
  Print(): void;
}
abstract class ProductTemplate implements ProductContract {
  public Name: string = "";
  public Price: number = 0;
  public Qty: number = 0;
  abstract Total(): number;
  abstract Print(): void;
}
class ProductComponent extends ProductTemplate {
  Name = "Samsung Tv";
  Price = 46000;
  Qty = 3;
  Total(): number {
    return this.Qty * this.Price;
  }
  Print(): void {
    console.log(
      `Name=${this.Name} \nPrice=${this.Price} \nQty=${this.Qty} \nTotal=${this.Total()} `,
    );
  }
}

var obj1 = new ProductComponent();
obj1.Print();
