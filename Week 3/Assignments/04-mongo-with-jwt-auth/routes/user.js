const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken")
const {JWT_SECRET}= require("../config")
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  const userExist = await User.findOne({
    username,
  });
  if (!userExist) {
    await User.create({
      username,
      password,
    });
    res.json({
      message: "User created successfully",
    });
  } else {
    res.status(404).send("user already exist");
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  const userExist = await User.findOne({
    username,
    password,
  });
  if (!userExist) {
    res.status(411).json({
      msg: "Incorrect username and password",
    });
  } else {
    const jwtToken = jwt.sign({ username }, JWT_SECRET);
    const token = "Bearer " + jwtToken;
    res.json({ Token: token });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});
  res.json({
    courses: courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    const courseId = req.params.courseId;
    await User.updateOne(
      {
        username: req.username,
      },
      {
        $push: {
          purchasedCourses: courseId,
        },
      }
    );
    res.json({
      message: "Course purchased successfully",
    });
  } catch (err) {
    res.status(411).json({
      message: "Purchase failed",
    });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const user = await User.findOne({
      username:req.username
    })
    const purchasedCourses =  await Course.find({
      _id:{
        '$in':user.purchasedCourses
      }
    })
    res.json({
      purchasedCourses:purchasedCourses
    })
  } catch (error) {
    req.status(404).json({
      msg:"error in server"
    })
  }
});

module.exports = router;
