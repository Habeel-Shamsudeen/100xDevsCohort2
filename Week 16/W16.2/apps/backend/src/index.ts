import express from 'express'
import {BACKEND_URL} from "@repo/common/config";
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