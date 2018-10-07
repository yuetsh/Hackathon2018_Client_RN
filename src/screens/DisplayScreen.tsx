import React from 'react'
import { Button, Platform, Text, View, Image } from 'react-native'
import styles from './DisplayScreen.styles'
import { NavigationScreenProps } from 'react-navigation'
import i18n from '../services/i18n'
import RNFetchBlob from 'rn-fetch-blob'
import { Size } from '../services/uikit'

class DisplayScreen extends React.Component<NavigationScreenProps> {
  static navigationOptions = {
    title: i18n.t('display_title')
  }
  download = async () => {
    const type = this.props.navigation.getParam('type')
    const path = this.props.navigation.getParam('localFilePath')
    Platform.OS === 'ios'
      ? RNFetchBlob.ios.openDocument(path)
      : RNFetchBlob.android.actionViewIntent(path, type)
  }

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
    const path = navigation.getParam('localFilePath')
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'file://' + path }}
          resizeMode='cover'
          borderRadius={Size.MemeRadius}
          style={{
            alignSelf: 'stretch',
            height: Size.MemeHeight,
            marginHorizontal: Size.ContainerPaddingHorizontal
          }}
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
