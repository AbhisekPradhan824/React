function Total(qty, price) {
    return qty * price;
}
function Print(Name, Price, Qty, Rating) {
    if (Rating) {
        console.log("Name: ".concat(Name, " \n Price: ").concat(Price, " \n Qty: ").concat(Qty, " \n Total: ").concat(Total(Qty, Price), " \n Rating: ").concat(Rating));
    }
    else {
        console.log("Name: ".concat(Name, " \n Price: ").concat(Price, " \n Qty: ").concat(Qty, " \n Total: ").concat(Total(Qty, Price)));
    }
}
Print("Samsung TV", 45000.76, 3);
