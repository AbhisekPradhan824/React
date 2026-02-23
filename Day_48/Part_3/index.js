var product = {
    Name: "Samsung TV",
    Price: 12000,
    Qty: 3,
    Total: function () {
        return this.Qty * this.Price;
    },
    Print: function () {
        console.log("\n    Name:  ".concat(this.Name, "\n Price: ").concat(this.Price, " \n Qty: ").concat(this.Qty, " \n Total: ").concat(this.Total()));
    },
};
product.Print();
