import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Link from 'react-router-native/Link'

class EditingScreen extends Component {
  render () {
    return (
      <View>
        <Text>Editing</Text>
        <Link to='/'>
          <Text>Go Home</Text>
        </Link>
      </View>
    )
  }
}

export default EditingScreen
