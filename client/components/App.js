import React from 'react'

import InputField from "./InputField"
import StudentList from "./StudentList"
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const App = (props) => {
  const {classes} = props
  return (
    <div>
      <h1> DASHBOARD </h1>
      <InputField />
      <StudentList />
    </div>
  )
}

export default withStyles(styles)(App)
