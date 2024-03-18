require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/todo_operation/todoRoutes");
const mongoose = require("mongoose");

//Database variables and connection
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//API endpoint
app.use(`/v1`, router);

app.get("/", (req, res) => {
  res.send("Welcome to Node JS ToDo App");
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
