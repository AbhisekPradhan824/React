interface IProduct {
  Name: string;
  Price: number;
}

function Print<T>(data: T): T {
  return data;
}
console.log(Print<string>("Hello"));
console.log(Print<number>(20));
console.log(Print<IProduct>({ Name: "Samsung TV", Price: 12999 }));
console.log(Print<string[]>(["Abh", "ans", "A", "B", "C"]));
