import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'
import styles from './MemeItem.styles'

interface MemeItemProps extends NavigationScreenProps {
  item: any
}

class MemeItem extends React.Component<MemeItemProps> {
  public onPress = () => {
    this.props.navigation.navigate('Editing')
  }

  public render () {
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={styles.container}>
          <View style={styles.templateWrapper} />
          <Text style={styles.text}>{this.props.item}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default withNavigation(MemeItem as any) as React.ReactType
