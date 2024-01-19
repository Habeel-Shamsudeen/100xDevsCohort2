const mongoose = require("mongoose");
const { string } = require("zod");

//url usually stored in .env file
mongoose
  .connect("mongodb+srv://habeelshamsudeen:MuyLHszKZTPsVi9I@cluster0.lyi1r5n.mongodb.net/Todo_app")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("DB error" + err);
  });

const todoSchema = mongoose.Schema({
    title:String,
    description: String,
    completed:Boolean
})

const todo = mongoose.model("todos",todoSchema);

module.exports={
    todo
}