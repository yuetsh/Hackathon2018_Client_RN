import React from 'react'
import {
  Button,
  Platform,
  View,
  Image,
  AsyncStorage,
  TouchableWithoutFeedback,
  Linking
} from 'react-native'
import styles from './DisplayScreen.styles'
import { NavigationScreenProps } from 'react-navigation'
import i18n from '../services/i18n'
import RNFetchBlob from 'rn-fetch-blob'
import { Size } from '../services/uikit'
import { NewMeme } from '../services/request'

interface Meme extends NewMeme {
  template: string
  localFilePath: string
}

interface NavigationScreenState {
  meme: Meme
}

class DisplayScreen extends React.Component<
  NavigationScreenProps,
  NavigationScreenState
  > {
  static navigationOptions = {
    title: i18n.t('display_title')
  }

  readonly state = {
    meme: {
      template: '',
      localFilePath: '',
      id: '',
      link: '',
      name: '',
      width: 0,
      height: 0,
      type: 'images/gif'
    }
  }

  async componentDidMount () {
    const meme = await AsyncStorage.getItem('NewMeme')
    meme && this.setState({ meme: JSON.parse(meme) })
  }

  open = (url: string) => async () => {
    await Linking.openURL(url)
  }

  download = async () => {
    const { meme: { type, localFilePath: path } } = this.state
    Platform.OS === 'ios'
      ? RNFetchBlob.ios.openDocument(path)
      : RNFetchBlob.android.actionViewIntent(path, type)
  }

  share = () => {}

  goBack = () => {
    const { meme: { template } } = this.state
    this.props.navigation.replace('Editing', { name: template })
  }

  goList = () => {
    this.props.navigation.popToTop()
  }

  render () {
    if (!this.state.meme.name) return null
    const { meme: { localFilePath: path, link } } = this.state
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onLongPress={this.open(link)}>
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
        </TouchableWithoutFeedback>
        <View style={styles.btnsWrapper}>
          <View style={styles.btnWrapper}>
            <Button title={i18n.t('open_btn')} onPress={this.open(link)} />
          </View>
          <View style={styles.btnWrapper}>
            <Button title={i18n.t('download_btn')} onPress={this.download} />
          </View>
          <View style={styles.btnWrapper}>
            <Button title={i18n.t('share_btn')} onPress={this.share} />
          </View>
          <View style={styles.btnWrapper}>
            <Button title={i18n.t('new_btn')} onPress={this.goBack} />
          </View>
          <View style={styles.btnWrapper}>
            <Button title={i18n.t('home_btn')} onPress={this.goList} />
          </View>
        </View>
      </View>
    )
  }
}

export default DisplayScreen
