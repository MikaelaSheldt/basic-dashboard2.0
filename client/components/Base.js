import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import DataInput from "./DataInput"
import StudentTable from "./StudentTable"

const styles = (theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export function Base(props) {
  const {classes} = props

  return (
    <div className={classes.root}>
      <Paper >
        <DataInput />
        <StudentTable />
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Base)
