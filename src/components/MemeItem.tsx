import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'
import styles from './MemeItem.styles'
import { Meme } from '../services/request'
import i18n from '../services/i18n'
import CachedImage from './CachedImage'
import { Size } from '../services/uikit'

interface MemeItemProps extends NavigationScreenProps {
  item: Meme
}

class MemeItem extends React.Component<MemeItemProps> {
  onPress = () => {
    const { item } = this.props
    this.props.navigation.navigate('Editing', { name: item.name })
  }

  render () {
    const { item } = this.props
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={styles.container}>
          <CachedImage
            source={{ uri: item.cover }}
            resizeMode='cover'
            borderRadius={Size.MemeRadius}
            style={{ alignSelf: 'stretch', height: Size.MemeHeight }}
          />
          <Text style={styles.text}>{i18n.t(item.name)}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default withNavigation(MemeItem as any) as React.ReactType
