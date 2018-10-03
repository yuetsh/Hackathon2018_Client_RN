import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import styles from './MemeItem.styles'
import { withNavigation, NavigationScreenProps } from 'react-navigation'

interface MemeItemProps extends NavigationScreenProps {
  item: any
}

class MemeItem extends React.Component<MemeItemProps> {
  render () {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.navigation.push('Editing')}
      >
        <View style={styles.container}>
          <View style={styles.templateWrapper} />
          <Text style={styles.text}>{this.props.item}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default withNavigation(MemeItem as any) as React.ReactType
