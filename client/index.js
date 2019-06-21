// client entry point

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'

import students from "../public/students.json"
import store from './store'
import Base from './components/Base'

//creates application-wide theme for styling
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#cfd8dc',
      dark: '#9ea7aa'
    },
    secondary: {
      main: '#7cb342',
      dark: '#4b830d'
    },
    text: {
      primary: '#212121',
    }
  }
})

// provides child components the ability to connect to the redux store and Material-theme
render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Base />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
