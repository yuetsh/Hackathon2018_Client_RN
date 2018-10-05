import React from 'react'
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'
import styles from './MemeItem.styles'
import { Meme } from '../services/request'
import imageCacheHoc from 'react-native-image-cache-hoc'
import Indicator from './Indicator'

interface MemeItemProps extends NavigationScreenProps {
  item: Meme
}

const CachedImage = imageCacheHoc(Image, {
  defaultPlaceholder: { component: Indicator, props: {} }
})

class MemeItem extends React.Component<MemeItemProps> {
  public onPress = () => {
    const { item } = this.props
    this.props.navigation.navigate('Editing', item)
  }

  public render () {
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
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default withNavigation(MemeItem as any) as React.ReactType
