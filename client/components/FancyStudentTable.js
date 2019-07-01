import React from 'react';
import { connect } from 'react-redux'
import MaterialTable from 'material-table'
import withStyles from '@material-ui/core/styles/withStyles'
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
          { title: 'Student ID', field: 'studentId', type: 'numeric' },
          { title: 'Attendance Percentage', field: 'attendancePercentage', type: 'numeric' },
          { title: 'Grade', field: 'grade', type: 'numeric' },
          { title: 'Email', field: 'email' },
          { title: 'Guidance Counselor', field: 'guidanceCounselor' },
          { title: 'Guidance Counselor Email', field: 'guidanceCounselorEmail' },
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
          selection: true,
          showTitle: false,
          showSelectAllCheckbox: false,
          pageSize: 10,
          doubleHorizontalScroll: true
        }}
        actions={[
          {
            tooltip: 'Remove All Selected Users',
            icon: 'comment',
            onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')
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
