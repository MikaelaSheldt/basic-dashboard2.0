// api/students.js
const router = require('express').Router();

const {Student} = require('../database/models')

// matches GET requests to /api/students/
router.get('/', (req, res, next) => {
  res.send("STUDENTS ROUTE WORKS")
  // Student.find({}, (err, students) => {
  //   if(err) console.log("students query didn't work")
  //   else {
  //     res.json(students)
  //   }
  // })
})

module.exports = router;
