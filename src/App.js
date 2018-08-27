import React, { Component } from 'react'
import { NativeRouter, Route, Switch } from 'react-router-native'
import SplashScreen from 'react-native-splash-screen'
import HomeScreen from './screens/HomeScreen'
import EditingScreen from './screens/EditingScreen'

export default class App extends Component {
  componentDidMount () {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide()
  }

  render () {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/editing/:name' component={EditingScreen} />
        </Switch>
      </NativeRouter>
    )
  }
}
