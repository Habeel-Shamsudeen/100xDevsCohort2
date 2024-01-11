const express = require("express");
const app = express();
const port = 3000;

//to remove the CORS error
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get("/interest",(req,res)=>{
    let p = parseInt(req.query.principal);
    let r = parseInt(req.query.rate)/100;
    let t = parseInt(req.query.time);
    let SI = p*r*t;
    let total = SI + p;
    res.json({
        "total":total,
        "interest":SI
    })
})

app.listen(port,()=>{
    console.log(`listening to port: ${port}`);
})