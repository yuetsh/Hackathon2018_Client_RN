import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

interface EditingScreenProps extends NavigationScreenProps {}

class EditingScreen extends React.Component<EditingScreenProps> {
  static navigationOptions = {
    title: 'Editing'
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
