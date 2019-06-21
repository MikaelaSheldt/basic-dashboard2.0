import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import StudentList from "./StudentList"
import StudentTable from "./StudentTable"

// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: theme.spacing(3, 2),
//   },
// }));

export default function StudentOutput() {
  //const classes = useStyles();

  return (
    <div>
      <Paper >
        <StudentTable />
      </Paper>
    </div>
  );
}
