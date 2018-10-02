import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './MemeItem.styles'
import { withNavigation, NavigationScreenProps } from 'react-navigation'

interface MemeItemProps extends NavigationScreenProps {
  item: any
}

class MemeItem extends React.Component<MemeItemProps> {
  render () {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.push('Editing')}>
        <View style={styles.container}>
          <View style={styles.templateWrapper}>
            <Text>Gif Template</Text>
          </View>
          <View style={styles.textWrapper}>
            <Text>{this.props.item}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default withNavigation(MemeItem as any) as React.ReactType
