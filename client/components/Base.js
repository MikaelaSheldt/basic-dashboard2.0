import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import AttendanceInput from "./AttendanceInput"
import FancyStudentTable from "./FancyStudentTable"

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    width: '100%',
    maxWidth: 900
  }
})

function Base(props) {
  const {classes} = props

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} >
        <AttendanceInput />
        <FancyStudentTable />
      </Paper>
    </div>
  );
}

// exports new component that is connected to the material theme
export default withStyles(styles)(Base)
