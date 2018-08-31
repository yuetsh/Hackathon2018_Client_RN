import React from 'react'
import { View, Text, Button } from 'react-native'

interface EditingScreenProps {
  navigation: any
}

class EditingScreen extends React.Component<EditingScreenProps> {
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
