import React from 'react'
import RNLanguages from 'react-native-languages'
import SplashScreen from 'react-native-splash-screen'
import { createStackNavigator } from 'react-navigation'
import EditingScreen from './screens/EditingScreen'
import DisplayScreen from './screens/DisplayScreen'
import HomeScreen from './screens/HomeScreen'
import i18n from './services/i18n'
import { View, Platform, SafeAreaView } from 'react-native'
import { Color } from './services/uikit'

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Editing: EditingScreen,
    Display: DisplayScreen
  },
  {
    mode: 'card',
    headerMode: Platform.OS === 'ios' ? 'none' : 'float',
    initialRouteName: 'Home',
    headerTransitionPreset: 'fade-in-place',
    cardStyle: {
      backgroundColor: Color.White
    }
  }
)

export default class App extends React.Component {
  componentDidMount () {
    Platform.OS === 'ios' && SplashScreen.hide()
    RNLanguages.addEventListener('change', this.onLanguagesChange)
  }

  componentWillUnmount () {
    RNLanguages.removeEventListener('change', this.onLanguagesChange)
  }

  onLanguagesChange = ({ language }: { language: string }) => {
    i18n.locale = language
  }

  render () {
    return Platform.select({
      ios: (
        <SafeAreaView style={{ flex: 1 }}>
          <MainStack />
        </SafeAreaView>
      ),
      android: (
        <View style={{ flex: 1 }}>
          <MainStack />
        </View>
      )
    })
  }
}
