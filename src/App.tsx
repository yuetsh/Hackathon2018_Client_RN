import React from 'react'
import HomeScreen from './screens/HomeScreen'
import EditingScreen from './screens/EditingScreen'
import { createStackNavigator } from 'react-navigation'
import RNLanguages from 'react-native-languages'
import i18n from './services/i18n'

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
  componentDidMount () {
    RNLanguages.addEventListener('change', this.onLanguagesChange)
  }

  componentWillUnmount () {
    RNLanguages.removeEventListener('change', this.onLanguagesChange)
  }

  onLanguagesChange = ({ language }: { language: string }) => {
    i18n.locale = language
  }

  render () {
    return <Navigator />
  }
}
