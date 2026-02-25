function Print<T>(data: T): T {
  return data;
}
console.log(Print<string>("Hello"));
console.log(Print<number>(20));
