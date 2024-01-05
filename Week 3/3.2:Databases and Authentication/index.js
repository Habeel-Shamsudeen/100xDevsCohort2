const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const app = express();

//IN MEMORY sign in and access users
// const ALL_USERS = [
//   {
//     username: "harkirat@gmail.com",
//     password: "123",
//     name: "harkirat singh",
//   },
//   {
//     username: "raman@gmail.com",
//     password: "123321",
//     name: "Raman singh",
//   },
//   {
//     username: "priya@gmail.com",
//     password: "123321",
//     name: "Priya kumari",
//   },
// ];

// function userExists(username, password) {
//   // write logic to return true or false if this user exists
//   // in ALL_USERS array
// //     return ALL_USERS.some(element => {
// //         return element.username===username && element.password===password
// //   });
// //or
//     return !! ALL_USERS.find((element)=>{
//         return element.username===username && element.password===password
//     })
// }

// app.use(express.json());

// app.post("/signin", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, jwtPassword);
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     // return a list of users other than this username
//     const users = ALL_USERS.filter((obj)=>{
//         return !(obj.username===username);
//     })
//     res.json({
//         user: users
//     })
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

const mongoose = require("mongoose");
mongoose
  .connect(
    "your mongoDB URL/User_app"
  )
  .then(() => console.log("mongoDB connected"))
  .catch((err) => {
    console.log("Mongo Error " + err);
  });
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("users", userSchema);
app.use(express.json());

async function userExists(username, password) {
  // should check in the database
  const existingUser = await User.findOne({
    username: username,
    password: password,
  });
  return !!existingUser;
}

async function userExists(username) {
  // should check in the database
  const existingUser = await User.findOne({ username: username });
  return !!existingUser;
}

app.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!(await userExists(username, password))) {
    return res
      .status(403)
      .json({
        msg: "Username and Password do not Match or User doesnt exist",
      });
  }

  var token = jwt.sign({ username: username },jwtPassword);
  return res.json({
    token,
  });
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  if (await userExists(username)) {
    return res.status(403).json({
      msg: "Username already exist",
    });
  } else {
    const user = new User({
      name: name,
      username: username,
      password,
      password,
    });
    user.save().then(() => console.log(username + " added to mongoDB"));
    res
      .status(201)
      .send(username + " Created");
  }
});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
    const users = await User.find({});
    const finalUsers = users.filter((obj) => {
      return !(obj.username === username);
    });
    console.log(finalUsers);
    res.json({user:finalUsers});
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});
app.listen(3000);
