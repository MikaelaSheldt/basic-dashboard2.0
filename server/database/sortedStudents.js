
const studentList = require("./students.json")

const sortedStudents = studentList.sort((student1, student2) => {
  return student1.attendancePercentage - student2.attendancePercentage
})

module.exports = sortedStudents
