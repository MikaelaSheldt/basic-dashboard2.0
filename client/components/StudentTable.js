import React from 'react';
import { connect } from 'react-redux'

import withStyles from '@material-ui/core/styles/withStyles'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = (theme) => ({
  root: {
    margin: 50,
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  }
});


function StudentTable(props) {
  const {classes} = props
  const students = props.students

  return (

    <div className={classes.root} >
      <Paper className={classes.paper} >
        <Table className={classes.table} size="small" >
          <TableHead >
            <TableRow >
              <TableCell>Name</TableCell>
              <TableCell align="left">Attendance Percentage</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Home Phone Number</TableCell>
              <TableCell align="left">Grade Level</TableCell>
              <TableCell align="left">Guidance Counselor</TableCell>
              <TableCell align="left">Guidance Counselor Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map(student => (
              <TableRow key={student.studentId} className={classes.row}>
                <TableCell component="th" scope="student">
                  {`${student.firstName} ${student.lastName}`}
                </TableCell>
                <TableCell align="left">{student.attendancePercentage}</TableCell>
                <TableCell align="left">{student.email}</TableCell>
                <TableCell align="left">{student.homePhoneNumber}</TableCell>
                <TableCell align="left">{student.grade}</TableCell>
                <TableCell align="left">{student.guidanceCounselor}</TableCell>
                <TableCell align="left">{student.guidanceCounselorEmail}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}


const mapStateToProps = (state) => ({
  students: state.students
})

// exports new component that is connected to redux store and material theme
export default connect(mapStateToProps)(withStyles(styles)(StudentTable))
