import React from 'react'
import { Button, TextInput, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import styles from './EditingScreen.styles'
import Image from 'react-native-image-progress'
import { Bar, Circle, CircleSnail, Pie } from 'react-native-progress'

const indicators = [Bar, Pie, Circle, CircleSnail]

interface EditingScreenProps extends NavigationScreenProps {}

interface EditingScreenState {
  indicator: React.ComponentClass
}

class EditingScreen extends React.Component<
  EditingScreenProps,
  EditingScreenState
  > {
  readonly state = {
    indicator: Bar
  }

  componentDidMount () {
    const indicator = indicators[Math.floor(Math.random() * indicators.length)]
    this.setState({ indicator })
  }

  public onPress = () => {
    this.props.navigation.navigate('Home')
  }

  public render () {
    const { navigation } = this.props
    const gif = navigation.getParam('gif')
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: gif }}
          indicator={this.state.indicator}
          style={{ alignSelf: 'stretch', height: 200 }}
          borderRadius={12}
        />
        <TextInput />
        <Button title='Home' onPress={this.onPress} />
      </View>
    )
  }
}

export default EditingScreen
