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
  Alert
} from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import styles from './EditingScreen.styles'
import { KeyboardAvoidingView } from 'react-native'
import i18n from '../services/i18n'
import Loading from '../components/Loading'
import { createMeme } from '../services/request'
import CachedImage from '../components/CachedImage'
import { Size } from '../services/uikit'

interface EditingScreenState {
  loading: boolean
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
    subs: new Array(this.props.navigation.getParam('placeholders').length).fill(
      ''
    )
  }

  componentWillUnmount () {
    this.setState({
      subs: []
    })
  }

  backToList = () => {
    this.props.navigation.popToTop()
  }

  onChange = (index: number) => (val: string) => {
    const newSubs: string[] = this.state.subs
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
    const name = this.props.navigation.getParam('name')
    const data = await createMeme({ name, subs: this.state.subs })
    if (data && data.link) {
      const cache = await CachedImage.cacheFile(data.link)
      const newData = { ...data, localFilePath: cache.localFilePath }
      this.props.navigation.navigate('Display', newData)
      this.setState({ loading: false })
    } else {
      this.setState({ loading: false })
    }
  }

  render () {
    const { navigation } = this.props
    const placeholders = this.props.navigation.getParam('placeholders')
    const gif = navigation.getParam('gif')
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
          <Button title={i18n.t('editing_btn')} onPress={this.generate} />
          <Button title={i18n.t('home_btn')} onPress={this.backToList} />
        </ScrollView>
        <Loading mode='modal' visible={this.state.loading} />
      </KeyboardAvoidingView>
    )
  }
}

export default EditingScreen
