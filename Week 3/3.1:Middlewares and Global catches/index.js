const express = require("express");
const app = express();
const port = 3000;
//without middlewares dumb way
app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;
  if (username !== "habeel" || password !== "123") {
    res.status(403).json({
      msg: "user not found",
    });
    return; //early return ie if user not found do not run checkup logic
  }
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({
      msg: "Invalid no of kidneys",
    });
    return;
  }
  //health checkup logic
  res.send("health checkup done");
});

app.listen(port,()=>{
    console.log(`${port} started`);
});
