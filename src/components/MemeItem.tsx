import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'
import styles from './MemeItem.styles'
import { Meme } from '../services/request'
import i18n from '../services/i18n'
import CachedImage from './CachedImage'

interface MemeItemProps extends NavigationScreenProps {
  item: Meme
}

class MemeItem extends React.Component<MemeItemProps> {
  onPress = () => {
    const { item } = this.props
    this.props.navigation.navigate('Editing', item)
  }

  render () {
    const { item } = this.props
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={styles.container}>
          <CachedImage
            source={{ uri: item.cover }}
            resizeMode='cover'
            borderRadius={12}
            style={{ alignSelf: 'stretch', height: 200 }}
          />
          <Text style={styles.text}>{i18n.t(item.name)}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default withNavigation(MemeItem as any) as React.ReactType
