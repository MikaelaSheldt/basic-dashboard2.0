import sortedStudents from "../../public/sortedStudents"
import filterByAttendance from "../utilities"

// INITIAL STATE
const allStudents = {
  students: []
};

// ACTION TYPES
const GOT_STUDENTS = "GOT_STUDENTS";

// ACTION CREATORS
const gotStudents = students => ({
  type: GOT_STUDENTS,
  students
});

// THUNK CREATORS
export const getStudents = attendancePercentage => async dispatch => {
  const filteredStudentList = await filterByAttendance(sortedStudents, attendancePercentage)
  dispatch(gotStudents(filteredStudentList));
};

// REDUCER
export default function(state = allStudents, action) {
  switch (action.type) {
    case GOT_STUDENTS: {
      return {...state, students: action.students};
    }
    default:
      return state;
  }
}
