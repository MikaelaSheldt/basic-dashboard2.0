// api/students.js
const router = require('express').Router();

const Student = require('../database/models')

// matches GET requests to /api/students/
router.get('/', (req, res, next) => {
  //res.send("STUDENTS ROUTE WORKS")
  Student.find({}, (err, students) => {
    if(err) console.log("students query did not work")
    else {
      res.json(students)
    }
  })
})

// matches GET requests to /api/students/:attendancePercentage/
router.get('/:attendancePercentage', async (req, res, next) => {
  try {
    const students = await Student.find({attendancePercentage: { $lte: req.params.attendancePercentage }}).exec();
    res.json(students)
  } catch (err) {
    next(err)
  }
})

module.exports = router;
