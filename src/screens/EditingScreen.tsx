import React from 'react'
import {
  Button,
  TextInput,
  View,
  ScrollView,
  Text,
  Keyboard,
  NativeSyntheticEvent,
  NativeTouchEvent,
  Alert,
  AsyncStorage
} from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import styles from './EditingScreen.styles'
import { KeyboardAvoidingView } from 'react-native'
import i18n from '../services/i18n'
import { createMeme, Meme } from '../services/request'
import CachedImage from '../components/CachedImage'
import { Size } from '../services/uikit'
import GamePanel from '../components/GamePanel'

interface EditingScreenState {
  loading: boolean
  meme: Meme
  subs: string[]
}

class EditingScreen extends React.Component<
  NavigationScreenProps,
  EditingScreenState
  > {
  static navigationOptions = {
    title: i18n.t('editing_title')
  }
  readonly state = {
    loading: false,
    meme: {
      name: '',
      cover: '',
      gif: '',
      placeholders: []
    },
    subs: ['']
  }

  async componentDidMount () {
    const dataStr = await AsyncStorage.getItem('HomeData')
    if (dataStr) {
      const homeData = JSON.parse(dataStr) as Meme[]
      const name = this.props.navigation.getParam('name')
      const meme = homeData.filter(data => data.name === name)[0]
      this.setState({
        meme,
        subs: [...meme.placeholders].fill('')
      })
    }
  }

  backToList = () => {
    this.props.navigation.popToTop()
  }

  onChange = (index: number) => (val: string) => {
    const newSubs: string[] = [...this.state.subs]
    newSubs[index] = val
    this.setState({
      subs: newSubs
    })
  }

  generate = async (ev: NativeSyntheticEvent<NativeTouchEvent>) => {
    ev.stopPropagation()
    if (this.state.subs.includes('')) {
      Alert.alert(i18n.t('alert_title'))
      return
    }
    Keyboard.dismiss()
    this.setState({ loading: true })
    const name = this.state.meme.name
    const data = await createMeme({ name, subs: this.state.subs })
    if (data && data.link) {
      const cache = await CachedImage.cacheFile(data.link)
      const newData = {
        ...data,
        template: name,
        localFilePath: cache.localFilePath
      }
      await AsyncStorage.setItem('NewMeme', JSON.stringify(newData))
      this.props.navigation.navigate('Display')
      this.setState({ loading: false })
    } else {
      this.setState({ loading: false })
    }
  }

  render () {
    const { meme: { gif, placeholders } } = this.state
    if (!gif) return null
    return (
      <KeyboardAvoidingView behavior='position'>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardDismissMode='interactive'
          keyboardShouldPersistTaps='handled'
          showsVerticalScrollIndicator={false}
        >
          <CachedImage
            source={{ uri: gif }}
            style={{
              alignSelf: 'stretch',
              height: Size.MemeHeight,
              marginHorizontal: Size.ContainerPaddingHorizontal
            }}
            borderRadius={Size.MemeRadius}
          />
          <View style={styles.inputsContainer}>
            {this.state.subs.map((text: string, index: number) => (
              <View style={styles.inputWrapper} key={index}>
                <Text style={styles.text}>
                  {i18n.t('line', { num: index + 1 })}
                </Text>
                <TextInput
                  style={styles.input}
                  defaultValue=''
                  value={text}
                  placeholder={placeholders[index]}
                  returnKeyType={
                    placeholders.length === index + 1 ? 'done' : 'next'
                  }
                  onChangeText={this.onChange(index)}
                  clearButtonMode='unless-editing'
                />
              </View>
            ))}
          </View>
          <View style={styles.buttonWrapper}>
            <Button title={i18n.t('editing_btn')} onPress={this.generate} />
          </View>
          <Button title={i18n.t('home_btn')} onPress={this.backToList} />
        </ScrollView>
        {this.state.loading && <GamePanel />}
      </KeyboardAvoidingView>
    )
  }
}

export default EditingScreen
