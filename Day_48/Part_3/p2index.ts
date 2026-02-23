interface IProduct {
  Name: string;
  readonly Price: number;
  Qty: number;
  Total?(): number;
  Print(): void;
  Rating?: number;
}

let product: IProduct = {
  Name: "Samsung TV",
  Price: 12000,
  Qty: 3,
  Total: function () {
    return this.Qty * this.Price;
  },
  Print: function () {
    console.log(`
    Name:  ${this.Name}\n Price: ${this.Price} \n Qty: ${this.Qty} \n Total: ${this.Total()}`);
  },
};
product.Print();
