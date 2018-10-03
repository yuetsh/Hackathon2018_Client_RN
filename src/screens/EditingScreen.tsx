import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import i18n from '../services/i18n'

interface EditingScreenProps extends NavigationScreenProps {}

class EditingScreen extends React.Component<EditingScreenProps> {
  static navigationOptions = {
    title: i18n.t('editing_title')
  }

  render () {
    return (
      <View>
        <Text>Editing</Text>
        <Button
          title='Go to Home'
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}

export default EditingScreen
