const express = require("express");
const app = express();
const port = 3000;
//without middlewares dumb way
// app.get("/health-checkup", (req, res) => {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;
//   if (username !== "habeel" || password !== "123") {
//     res.status(403).json({
//       msg: "user not found",
//     });
//     return; //early return ie if user not found do not run checkup logic
//   }
//   if (kidneyId != 1 && kidneyId != 2) {
//     res.status(411).json({
//       msg: "Invalid no of kidneys",
//     });
//     return;
//   }
//   //health checkup logic
//   res.send("health checkup done");
// });

//with middleware
let noOfReq=0;
function calculateReq(req,res,next){
    noOfReq++;
    console.log(noOfReq);
    next();
}
function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username !== "habeel" || password !== "123") {
    res.status(403).json({
      msg: "user not found",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyId = req.query.kidneyId;
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({
      msg: "wrong inputs"
    });
  } else {
    next();
  }
}

// middleware to calculate the response time to handle a request
app.use((req,res,next)=>{
    let startTime=Date.now();
    res.once('finish',()=>{
        let duration = Date.now()-startTime;
        console.log(`duration to handle ${req.originalUrl} is ${duration} millisec`)
    })
    next();
})
app.use(calculateReq);
app.use(userMiddleware); //middleware used for every route

app.get("/health-checkup",kidneyMiddleware, (req, res) => {
  //health checkup logic
  res.send("health checkup done");
});

app.get("/kidney-checkup", kidneyMiddleware, (req, res) => {
  res.send("kidney is healthy");
});

app.get("/heart-checkup", (req, res) => {
  res.send("heart is healthy");
});

app.listen(port, () => {
  console.log(`${port} started`);
});
