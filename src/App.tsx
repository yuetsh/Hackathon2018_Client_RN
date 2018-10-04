import React from 'react'
import RNLanguages from 'react-native-languages'
import { createStackNavigator } from 'react-navigation'
import EditingScreen from './screens/EditingScreen'
import HomeScreen from './screens/HomeScreen'
import i18n from './services/i18n'
import codePush from 'react-native-code-push'

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
  public async componentDidMount () {
    RNLanguages.addEventListener('change', this.onLanguagesChange)
    await codePush.sync({
      updateDialog: {
        title: 'Update available'
      },
      installMode: codePush.InstallMode.IMMEDIATE
    })
  }

  public componentWillUnmount () {
    RNLanguages.removeEventListener('change', this.onLanguagesChange)
  }

  public onLanguagesChange = ({ language }: { language: string }) => {
    i18n.locale = language
  }

  public render () {
    return <Navigator />
  }
}
