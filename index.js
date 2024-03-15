const express = require("express");
const app = express();
const port = 3000;
const router = require('./routes/todo_operation/crud');

//API endpoint
app.use(`/v1`,router);


app.get("/", (req, res) => {
  res.send("Welcome to Node JS ToDo App");
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
    