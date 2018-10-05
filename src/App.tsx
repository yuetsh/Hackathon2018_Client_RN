import React from 'react'
import RNLanguages from 'react-native-languages'
import { createStackNavigator } from 'react-navigation'
import EditingScreen from './screens/EditingScreen'
import HomeScreen from './screens/HomeScreen'
import i18n from './services/i18n'
import { SafeAreaView } from 'react-native'

const Navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Editing: {
      path: 'editing/:name',
      screen: EditingScreen
    }
  },
  {
    mode: 'card',
    cardStyle: {
      backgroundColor: '#fff'
    },
    headerMode: 'none',
    initialRouteName: 'Home',
    navigationOptions: {
      gesturesEnabled: true
    }
  }
)

export default class App extends React.Component {
  public componentDidMount () {
    RNLanguages.addEventListener('change', this.onLanguagesChange)
  }

  public componentWillUnmount () {
    RNLanguages.removeEventListener('change', this.onLanguagesChange)
  }

  public onLanguagesChange = ({ language }: { language: string }) => {
    i18n.locale = language
  }

  public render () {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Navigator />
      </SafeAreaView>
    )
  }
}
