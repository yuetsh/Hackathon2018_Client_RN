import React from 'react'
import HomeScreen from './screens/HomeScreen'
import EditingScreen from './screens/EditingScreen'
import { createStackNavigator } from 'react-navigation'

const Navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Editing: EditingScreen
  },
  {
    headerMode: 'float',
    initialRouteName: 'Home',
    navigationOptions: {
      gesturesEnabled: true
    }
  }
)

export default class App extends React.Component {
  render () {
    return <Navigator />
  }
}
