var product = { Name: "Samsung TV", Price: 12000.78, Stock: true, Rating: { Rate: 4.5 } };
if (product.Qty) {
    console.log("\n  Name: ".concat(product.Name, " \n\n  Price: ").concat(product.Price, " \n\n  Stock: ").concat(product.Stock, " \n\n  Rating: ").concat(product.Rating.Rate, " \n\n  Qty: ").concat(product.Qty, "\n  "));
}
else {
    console.log("\n  Name: ".concat(product.Name, " \n\n  Price: ").concat(product.Price, " \n\n  Stock: ").concat(product.Stock, " \n\n  Rating: ").concat(product.Rating.Rate, "\n  "));
}
