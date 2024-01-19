const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.post("/todo", async (req, res) => {
  const createPayLoad = req.body;
  const parsedPayLoad = createTodo.safeParse(createPayLoad);
  if (!parsedPayLoad.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  // put it in mongoDB
  await todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false,
  });

  res.json({
    msg: "Todo create",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find();
  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayLoad = req.body;
  const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
  if (!parsedPayLoad.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  setTimeout(async ()=>{
    await todo.deleteOne({
      _id: req.body.id,
    })
  },4000)
});


app.listen(port, () => {
  console.log(`listening to ${port}`);
});
