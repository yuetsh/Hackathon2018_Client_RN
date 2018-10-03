import React from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import i18n from '../services/i18n'

interface EditingScreenProps extends NavigationScreenProps {}

class EditingScreen extends React.Component<EditingScreenProps> {
  public static navigationOptions = {
    title: i18n.t('editing_title')
  }

  public onPress = () => {
    this.props.navigation.navigate('Home')
  }

  public render () {
    return (
      <View>
        <Text>Editing</Text>
        <Button title='Go to Home' onPress={this.onPress} />
      </View>
    )
  }
}

export default EditingScreen
