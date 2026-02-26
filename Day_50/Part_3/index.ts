interface IOracle {
  UserId: string;
  Password: string;
  Database: string;
}
interface IMongoDb {
  Url: string;
}
interface IMySql {
  User: string;
  Pwd: string;
  DbName: string;
}

class Database<T> {
  constructor(database: T) {
    for (var property in database) {
      console.log(`${property} : ${database[property]}`);
    }
  }
}

console.log("-----Connecting with Oracle");
let ora = new Database<IOracle>({
  UserId: "scott",
  Password: "tiger",
  Database: "ProductsDb",
});
console.log("-----Connecting with MongoDb");
let mongoClient = new Database<IMongoDb>({
  Url: "http://127.0.0.1:27017",
});
