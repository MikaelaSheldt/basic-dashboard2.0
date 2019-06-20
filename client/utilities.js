
/* filters list of students and returns a new list of students with an attendancePercentage less than or equal to the given attendancePercentage */
export default function filterByAttendance(studentList, attendancePercentage) {
  return studentList.filter(student => {
    return student.attendancePercentage <= attendancePercentage
  })
}
