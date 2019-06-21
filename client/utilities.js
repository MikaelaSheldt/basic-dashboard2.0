
/* filters a list of students and returns a new list of students who's attendancePercentage is less than or equal to the given attendancePercentage. Used in store/dashboard.js */

export default function filterByAttendance(studentList, attendancePercentage) {
  return studentList.filter(student => {
    return student.attendancePercentage <= attendancePercentage
  })
}
