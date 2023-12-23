const { ifError } = require("assert");
const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const fs = require("fs");

app.get('/',(req,res)=>{
    fs.readFile("todo.txt","utf8",(err,data)=>{
        res.send(data);
    })
});
app.use(bodyParser.json()); //body parser middleware
app.post("/sub",(req,res)=>{
    fs.appendFile("todo.txt",req.body["todo"],(err)=>{
        if(err){
            console.error(err);
        }
    res.send("todo updated");
    })
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})