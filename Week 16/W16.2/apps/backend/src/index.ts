import express from 'express'
const app = express();
const port = 3003;
app.get("/",(req,res)=>{
    res.json({
        message:"heelo"
    })
});

app.listen(port,()=>{
    console.log("sdafasdfasd")
});