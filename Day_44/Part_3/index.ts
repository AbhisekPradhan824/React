var product: {
  Name: string;
  Price: number;
  Stock: boolean;
  Rating: { Rate: number };
  Qty?: number;
} = { Name: "Samsung TV", Price: 12000.78, Stock: true, Rating: { Rate: 4.5 } };

if (product.Qty) {
  console.log(`
  Name: ${product.Name} \n
  Price: ${product.Price} \n
  Stock: ${product.Stock} \n
  Rating: ${product.Rating.Rate} \n
  Qty: ${product.Qty}
  `);
} else {
  console.log(`
  Name: ${product.Name} \n
  Price: ${product.Price} \n
  Stock: ${product.Stock} \n
  Rating: ${product.Rating.Rate}
  `);
}
