var Database = /** @class */ (function () {
    function Database(database) {
        for (var property in database) {
            console.log("".concat(property, " : ").concat(database[property]));
        }
    }
    return Database;
}());
console.log("-----Connecting with Oracle");
var ora = new Database({
    UserId: "scott",
    Password: "tiger",
    Database: "ProductsDb",
});
console.log("-----Connecting with MongoDb");
var mongoClient = new Database({
    Url: "http://127.0.0.1:27017",
});
