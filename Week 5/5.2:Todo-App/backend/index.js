import { createTodo, updateTodo } from "./types";
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.post("/todo", (req, res) => {
  const createPayLoad = req.body;
  const parsedPayLoad = createTodo.safeParse(createPayLoad);
  if (!parsedPayLoad.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  // put it in mongoDB
});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {
  const updatePayLoad = req.body;
  const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
  if (!parsedPayLoad.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
});

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
