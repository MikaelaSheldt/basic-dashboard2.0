// client entry point

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import students from "../public/students.json"
import store from './store'
import Base from './components/Base'

import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'

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

render(

  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Base />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
