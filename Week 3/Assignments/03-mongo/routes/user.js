const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

//refer the solution objectId method is used there
// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  const userExist = await User.findOne({
    username: username,
  });
  if (!userExist) {
    await User.create({
      username: username,
      password: password,
      purchasedCourses: [],
    });
    res.json({
      message: "User created successfully",
    });
  } else {
    res.status(404).send("user already exist");
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
  const courseId = req.params.courseId;
  await User.updateOne(
    {
      username: req.headers.username,
    },
    {
      purchasedCourses: courseId,
    }
  );
  res.json({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username,
  });
  let purchasedCoursesId = user.purchasedCourses;
  const purchasedCourses = await Promise.all(
    purchasedCoursesId.map(async (element) => {
      const course=await Course.findOne({
        _id: element,
      });
      return course
    })
  );

  res.json({ purchasedCourses: purchasedCourses });
});

module.exports = router;
