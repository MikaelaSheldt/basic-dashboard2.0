
import React, { Component } from 'react'
import { connect } from 'react-redux'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

import { getStudents } from '../store/dashboard'
import Header from './Header'

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  inline: {
    flexDirection: 'row',
    alignContent: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
})

class AttendanceInput extends Component {

  constructor() {
    super()
    this.state = {
      attendancePercentage: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;

    this.setState({
      attendancePercentage: value
    });
  }

  handleSubmit (event) {
    event.preventDefault()
    const attendancePercentage = this.state.attendancePercentage
    this.props.getStudents(attendancePercentage)
  }


  render () {
    const {classes} = this.props
    return (
      <div className={classes.container}>
        <Header />
        <div className={classes.inline}>
          <TextField
            className={classes.textField}
            id="outlined-helperText"
            label="Attendance %"
            helperText="Please enter a number"
            margin="normal"
            value={this.state.attendancePercentage}
            onChange={this.handleInputChange}
          />
          <Button onClick={this.handleSubmit} variant="outlined" className={classes.button}>
            Filter Students
          </Button>
        </div>
    </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  getStudents: (attendancePercentage) => dispatch(getStudents(attendancePercentage))
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(AttendanceInput))
