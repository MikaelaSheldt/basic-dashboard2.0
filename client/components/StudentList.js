import React from 'react'
import { connect } from 'react-redux'

const StudentList = (props) => {
  const students = props.students
    return (
      <div>
        <ul>
          {
            students.map(student => {
              return (
                <li key={student.studentId}>
                  {
                    student.firstName
                  }
                </li>
              )
            })
          }
        </ul>
      </div>
    )
}

const mapStateToProps = (state) => ({
  students: state.students
})

export default connect(mapStateToProps)(StudentList)
