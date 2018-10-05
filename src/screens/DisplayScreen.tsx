import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import styles from './DisplayScreen.styles'
import imageCacheHoc from 'react-native-image-cache-hoc'
import Indicator from '../components/Indicator'
import { NavigationScreenProps } from 'react-navigation'
import i18n from '../services/i18n'

const CachedImage = imageCacheHoc(Image, {
  defaultPlaceholder: {
    component: Indicator,
    props: { style: { height: 200 } }
  }
})

class DisplayScreen extends React.Component<NavigationScreenProps> {
  download = () => {}

  share = () => {}

  goBack = () => {
    this.props.navigation.goBack()
  }

  goList = () => {
    this.props.navigation.popToTop()
  }

  render () {
    const { navigation } = this.props
    const link = navigation.getParam('link')
    return (
      <View style={styles.container}>
        <CachedImage
          source={{ uri: link }}
          style={{ alignSelf: 'stretch', height: 200, marginHorizontal: 16 }}
          borderRadius={12}
        />
        <View style={styles.btnsWrapper}>
          <Text style={styles.text}>{link}</Text>
          <Button title={i18n.t('download_btn')} onPress={this.download} />
          <Button title={i18n.t('share_btn')} onPress={this.share} />
          <Button title={i18n.t('new_btn')} onPress={this.goBack} />
          <Button title={i18n.t('home_btn')} onPress={this.goList} />
        </View>
      </View>
    )
  }
}

export default DisplayScreen
