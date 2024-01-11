const express = require("express");
const app = express();
const port = 3000;
const db = require("../app/db");

const TaskController = require("./Controllers/TaskController");

app.use("/tasks", TaskController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
