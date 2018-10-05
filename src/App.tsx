import React from 'react'
import RNLanguages from 'react-native-languages'
import { createStackNavigator } from 'react-navigation'
import EditingScreen from './screens/EditingScreen'
import DisplayScreen from './screens/DisplayScreen'
import HomeScreen from './screens/HomeScreen'
import i18n from './services/i18n'
import { SafeAreaView } from 'react-native'
import { Color } from './services/uikit'

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Editing: EditingScreen,
    Display: DisplayScreen
  },
  {
    mode: 'card',
    headerMode: 'none',
    initialRouteName: 'Home',
    cardStyle: {
      backgroundColor: Color.White
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
        <MainStack />
      </SafeAreaView>
    )
  }
}
