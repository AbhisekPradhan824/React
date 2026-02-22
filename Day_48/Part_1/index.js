function Total(qty, price) {
    return qty * price;
}
function Print(Name, Price, Qty) {
    console.log("Name: ".concat(Name, " \n Price: ").concat(Price, " \n Qty: ").concat(Qty, " \n Total: ").concat(Total(Qty, Price)));
}
Print("Samsung TV", 45000.76, 3);
