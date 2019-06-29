// client entry point

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import {createMuiTheme, MuiThemeProvider, responsiveFontSizes} from '@material-ui/core/styles'

import students from "../public/students.json"
import store from './store'
import Base from './components/Base'

//creates application-wide theme for styling
// const theme = responsiveFontSizes(createMuiTheme({
//   palette: {
//     primary: {
//       main: '#ff337a',
//     },
//     secondary: {
//       main: '#33ffb8',
//     },
//    text: {
//    primary: '#212121',
//    }
//   }
// }))

// provides child components the ability to connect to the redux store and Material-theme
render(
  <Provider store={store}>
    <Base />
  </Provider>,
  document.getElementById('app')
)

// <MuiThemeProvider theme={theme}>
//   <Base />
// </MuiThemeProvider>
