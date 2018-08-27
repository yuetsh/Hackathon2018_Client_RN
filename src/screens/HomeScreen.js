import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'

class HomeScreen extends Component {
  render () {
    return (
      <View>
        <Text>Home</Text>
        <Link to={'editing/wangjingze'}>
          <Text>Go Editing</Text>
        </Link>
      </View>
    )
  }
}

export default HomeScreen
