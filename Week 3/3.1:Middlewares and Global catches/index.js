// MiddleWare, Global catches and Zod
const express = require("express");
const app = express();
const port = 3000;
const zod = require('zod');

app.use(express.json());
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
let noOfReq = 0;
function calculateReq(req, res, next) {
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
      msg: "wrong inputs",
    });
  } else {
    next();
  }
}

// middleware to calculate the response time to handle a request
app.use((req, res, next) => {
  let startTime = Date.now();
  res.once("finish", () => {
    let duration = Date.now() - startTime;
    console.log(
      `duration to handle ${req.originalUrl} is ${duration} millisec`
    );
  });
  next();
});
app.use(calculateReq);
app.use(userMiddleware); //middleware used for every route

app.get("/health-checkup", kidneyMiddleware, (req, res) => {
  //health checkup logic
  res.send("health checkup done");
});

app.get("/kidney-checkup", kidneyMiddleware, (req, res) => {
  res.send("kidney is healthy");
});

app.get("/heart-checkup", (req, res) => {
  res.send("heart is healthy");
});

//zod func as middleware
function validateKidney(req,res,next){
  const kidneys = req.body.kidneys;
  const schema = zod.array(zod.number()); //structure of our input array of numbers
  const response = schema.safeParse(kidneys)
  if(!response.success){
    res.json({ msg: "wrong input format" });
    return;
  }else{
    next();
  }
}
app.post("/health-checkup",validateKidney, (req, res) => {
  const kidneys = req.body.kidneys;
//expected body kidneys= [1,2]
//if kidney is not a valid data then server breaks

//input validation here only handles one possible case to break the server but there are many other ways to break the server to catch all these we use global catches
// better way to do input validation use ZOD (below without zod dumb way)
  // 
  // if (!kidneys) {
  //   res.json({ msg: "wrong input" });
  //   return;
  // }

//using zod
  //const schema = zod.array(zod.number()); //structure of our input array of numbers
  //const response = schema.safeParse(kidneys) // return an json {success: true/false, error:.../data:...}
  // console.log(response)
  // if(!response.success){
  //   res.json({ msg: "wrong input format" });
  //   return;
  // }
  const kidneyLength = kidneys.length;
  res.send(`you have ${kidneyLength} kidneys`);
});

//global catches
app.use((err, req, res, next) => {
  res.status(500).json({ msg: "sorry something is wrong in our server" });
});

app.listen(port, () => {
  console.log(`${port} started`);
});


/*
 write a schema for
 {
  email: string should look like an email
  password: atleast 8 char
  Country: IN or US
 }

 conat schema = zod.object({
  email:zod.string().email(),
  password:zod.string().min(8),
  country:zod.literal("IN").or(zod.literal("US"))
 })

 refer zod docs for more schema examples
*/