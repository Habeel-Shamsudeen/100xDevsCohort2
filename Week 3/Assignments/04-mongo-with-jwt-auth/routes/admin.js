const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin } = require("../db");
const { Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  const adminExist = await Admin.findOne({
    username,
  });
  if (!adminExist) {
    await Admin.create({
      username,
      password,
    });
    res.json({
      message: "Admin created successfully",
    });
  } else {
    res.status(404).send("adim already exist");
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  const adminExist = await Admin.findOne({
    username,
    password,
  });
  if (!adminExist) {
    res.status(411).json({
      msg: "Incorrect username and password",
    });
  } else {
    const jwtToken = jwt.sign({ username }, JWT_SECRET);
    const token = "Bearer " + jwtToken;
    res.json({ Token: token });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const course = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imageLink: req.body.imageLink,
  };
  const newCourse = await Course.create(course);
  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware,async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});
  res.json({
    courses:courses
  })
});

module.exports = router;
