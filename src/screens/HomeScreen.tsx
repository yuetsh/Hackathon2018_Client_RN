import React from 'react'
import { View, Text, Button } from 'react-native'

interface HomeScreenProps {
  navigation?: any
}

class HomeScreen extends React.Component<HomeScreenProps> {
  render () {
    return (
      <View>
        <Text>Home</Text>
        <Button
          title='Go to Editing'
          onPress={() => this.props.navigation.navigate('Editing')}
        />
      </View>
    )
  }
}

export default HomeScreen
