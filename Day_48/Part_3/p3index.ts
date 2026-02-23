interface IBasicDetails {
  Name: string;
  readonly Price: number;
  Qty: number;
  Total?(): number;
  Print(): void;
  Rating?: number;
}
interface ICategory {
  CategoryName: string;
}

interface IProduct extends ICategory, IBasicDetails {
  Title: string;
}

let product: IProduct = {
  Title: "Tv Details",
  Name: "Samsung TV",
  Price: 12000,
  Qty: 3,
  CategoryName: "Electronics",
  Total: function () {
    return this.Qty * this.Price;
  },
  Print: function () {
    console.log(`Title: ${this.Title}
    Name:  ${this.Name}\n Price: ${this.Price} \n Qty: ${this.Qty} \n Total: ${this.Total()} \n Category: ${this.CategoryName}`);
  },
};
product.Print();
