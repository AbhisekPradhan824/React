const express = require("express");
const mongoClient = require("mongodb").MongoClient;
const cors = require("cors");

var connectionString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h2>To DO - API</h2>`);
});

app.get("/appointments", (req, res) => {
  mongoClient.connect(connectionString).then((ClientObj) => {
    var database = ClientObj.db("todo");
    database
      .collection("appointments")
      .find({})
      .toArray()
      .then((documents) => {
        res.send(documents);
        res.end();
      });
  });
});

app.get("/users", (req, res) => {
  mongoClient.connect(connectionString).then((ClientObj) => {
    var database = ClientObj.db("todo");
    database
      .collection("users")
      .find({})
      .toArray()
      .then((documents) => {
        res.send(documents);
        res.end();
      });
  });
});

app.get("/appointment/:id", (req, res) => {
  const Id = parseInt(req.params.id);
  mongoClient.connect(connectionString).then((ClientObj) => {
    const database = ClientObj.db("todo");
    database
      .collection("appointments")
      .findOne({ Id: Id })
      .then((iddocument) => {
        res.send(iddocument);
        res.end();
      });
  });
});

app.post("/addtask", (req, res) => {
  const data = {
    Id: parseInt(req.body.Id),
    Title: req.body.Title,
    Date: new Date(req.body.Date),
    Description: req.body.Description,
  };
  mongoClient.connect(connectionString).then((ClientObj) => {
    var database = ClientObj.db("todo");
    database
      .collection("appointments")
      .insertOne(data)
      .then(() => {
        console.log("one record inserted successfully");
        res.status(201).send("Task Added Successfully");
      });
  });
});

app.post("/adduser", (req, res) => {
  const user = {
    UserId: req.body.UserId,
    UserName: req.body.UserName,
    Password: req.body.Password,
    Mobile: req.body.Mobile,
  };
  mongoClient.connect(connectionString).then((ClientObj) => {
    var database = ClientObj.db("todo");
    database
      .collection("users")
      .insertOne(user)
      .then(() => {
        console.log("User Registered Successfully");
        res.end();
      });
  });
});

app.put("/edittask/:id", (req, res) => {
  const id = parseInt(req.params.id);
  mongoClient.connect(connectionString).then((ClientObj) => {
    var database = ClientObj.db("todo");
    database
      .collection("appointments")
      .updateOne(
        { Id: id },
        {
          $set: {
            Id: id,
            Title: req.body.Title,
            Date: new Date(req.body.Date),
            Description: req.body.Description,
          },
        },
      )
      .then(() => {
        console.log("Data updated Successfully");
        res.status(200).send("Record Updated Successfully");
      });
  });
});

app.delete("/deletetask/:id", (req, res) => {
  const id = parseInt(req.params.id);
  mongoClient.connect(connectionString).then((ClientObj) => {
    var database = ClientObj.db("todo");
    database
      .collection("appointments")
      .deleteOne({ Id: id })
      .then(() => {
        console.log(`Record deleted successfully`);
        res.status(200).send("Record Deleted Successfully");
      });
  });
});

const Port = 4000;
app.listen(Port, () => {
  console.log(`Server is listening on : http://127.0.0.1:${Port}`);
});
