function Total(qty: number, price: number): number {
  return qty * price;
}
function Print(
  Name: string,
  Price: number,
  Qty: number,
  Rating?: number,
): void {
  if (Rating) {
    console.log(
      `Name: ${Name} \n Price: ${Price} \n Qty: ${Qty} \n Total: ${Total(Qty, Price)} \n Rating: ${Rating}`,
    );
  } else {
    console.log(
      `Name: ${Name} \n Price: ${Price} \n Qty: ${Qty} \n Total: ${Total(Qty, Price)}`,
    );
  }
}
Print("Samsung TV", 45000.76, 3);
