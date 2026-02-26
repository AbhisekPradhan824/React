function Sum(a: any, b: any) {
  return a + b;
}
function AddNumbers<T>(a: T, b: T) {
  return Sum(a, b);
}

console.log(AddNumbers<number>(30, 40));
