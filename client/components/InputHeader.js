import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import InputField from "./InputField"
import DataInput from "./DataInput"

// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: theme.spacing(3, 2),
//   },
// }));

export default function InputHeader() {
  //const classes = useStyles();

  return (
    <div>
      <Paper >
        <Typography variant="h5" component="h3">
          DASHBOARD
        </Typography>
        <Typography component="p">
          enter a number to view students with same average attendance and below
        </Typography>
        <DataInput />
      </Paper>
    </div>
  );
}
