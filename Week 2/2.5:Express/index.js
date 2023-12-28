const express = require("express");
const app = express();
const port = 3000;
let users = [
  {
    name: "habeel",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", (req, res) => {
  let habeelKidney = users[0].kidneys;
  let noOfKidneys = users[0].kidneys.length;
  console.log(habeelKidney);
  console.log(noOfKidneys);
  let noOfHealthyKidneys = 0;
  for (let i = 0; i < habeelKidney.length; i++) {
    if (habeelKidney[i].healthy) {
      noOfHealthyKidneys++;
    }
  }
  let noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;
  res.json({
    noOfKidneys,
    noOfHealthyKidneys,
    noOfUnhealthyKidneys,
  });
});
app.use(express.json());
// add new kidney to the person
app.post("/", (req, res) => {
  let isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    message: "DONE",
  });
});

//update all unhealthy kidneys to healthy
app.put("/", (req, res) => {
  if (AtleastOneUnhealthy()) {
    let noOfKidneys = users[0].kidneys.length;
    for (let i = 0; i < noOfKidneys; i++) {
      if (!users[0].kidneys[i].healthy) {
        users[0].kidneys[i].healthy = true;
      }
    }
    res.json({
      msg: "kidney status updated",
    });
  } else {
    res.status(411).json({
      message: "you have no bad kidneys",
    });
  }
});

function AtleastOneUnhealthy() {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      return true;
    }
  }
  return false;
}
//remove all unhealthy
app.delete("/", (req, res) => {
  if (AtleastOneUnhealthy()) {
    let noOfKidneys = users[0].kidneys.length;
    let healthyKidneys = [];
    for (let i = 0; i < noOfKidneys; i++) {
      if (users[0].kidneys[i].healthy) {
        healthyKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = healthyKidneys;
    res.json({});
  } else {
    res.status(411).json({
      message: "you have no bad kidneys",
    });
  }
});

app.listen(port, () => {
  console.log("listening to port 3000");
});
