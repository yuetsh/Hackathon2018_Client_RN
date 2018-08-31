import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import EditingScreen from './screens/EditingScreen'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Editing: EditingScreen
  },
  {
    initialRouteName: 'Home'
  }
)

export default class App extends React.Component {
  componentDidMount () {
    SplashScreen.hide()
  }

  render () {
    return <RootStack />
  }
}
