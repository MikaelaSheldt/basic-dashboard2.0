import React from 'react'

import InputField from "./InputField"
import StudentList from "./StudentList"
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50
  }
})

const Header = (props) => {
  const {classes} = props
  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h3">
        DASHBOARD
      </Typography>
      <Typography component="p">
        enter a number to view students with same average attendance and below
      </Typography>
    </div>
  )
}

export default withStyles(styles)(Header)
