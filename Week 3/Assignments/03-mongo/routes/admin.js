const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const { Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  const adminExist = await Admin.findOne({
    username: username
  });
  if (!adminExist) {
    await Admin.create({
        username:username,
        password:password
    });
    res.json({
      message: "Admin created successfully",
    });
  } else {
    res.status(404).send("adim already exist");
  }
});

router.post("/courses", adminMiddleware,async (req, res) => {
  // Implement course creation logic
  const course = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imageLink: req.body.imageLink,
  };
  const newCourse =await Course.create(course);
  res.json({
    message: 'Course created successfully', courseId: newCourse._id
  })
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});
  res.json({
    courses:courses
  })
});

module.exports = router;
