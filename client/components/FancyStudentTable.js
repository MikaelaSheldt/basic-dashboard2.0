import React from 'react';
import { connect } from 'react-redux'
import MaterialTable from 'material-table'
import Paper from '@material-ui/core/Paper';


class FancyStudentTable extends React.Component {

  render() {
    const students = this.props.students
    return (
      <MaterialTable

        title="Student Table"
        columns={[
          { title: 'Name', field: 'firstName' },
          { title: 'Last Name', field: 'lastName' },
          { title: 'Attendance Percentage', field: 'attendancePercentage', type: 'numeric' },
          { title: 'Email', field: 'email' },
          { title: 'Home Phone', field: 'homePhoneNumber' },
          { title: 'Guidance Counselor', field: 'guidanceCounselor' },
          { title: 'Guidance Counselor Email', field: 'guidanceCounselorEmail' },
          { title: 'Grade', field: 'grade', type: 'numeric' },
          { title: 'Student ID', field: 'studentId', type: 'numeric' },
        ]}
        data={students}
        components={{
        Container: props => (
            <div style={{
              marginTop: 50,
              marginRight: 'auto',
              marginLeft: 'auto',
              marginBottom: 50,
              width: '90%',
              maxWidth: 900
            }}>
                <Paper {...props} />
            </div>
        )
    }}
        options={{
          showTitle: false,
          pageSize: 5,
          doubleHorizontalScroll: true
        }}
        actions={[
          {
            icon: 'list',
            tooltip: 'View Notes',
            onClick: (event, rowData) => alert("NOTES FOR:\n" + rowData.firstName + ' ' + rowData.lastName)
          },
          {
            icon: 'add',
            tooltip: 'Add Note',
            onClick: (event, rowData) => alert("You've added a note to\n" + rowData.firstName + ' ' + `${rowData.lastName}'s records.`)
          }
        ]}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  students: state.students
})

// exports new component that is connected to redux store
export default connect(mapStateToProps)(FancyStudentTable)
