import React from 'react'
import {
  Button,
  TextInput,
  View,
  Image,
  ScrollView,
  Text,
  Keyboard,
  NativeSyntheticEvent,
  NativeTouchEvent,
  Alert
} from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import styles from './EditingScreen.styles'
import imageCacheHoc from 'react-native-image-cache-hoc'
import Indicator from '../components/Indicator'
import { KeyboardAvoidingView } from 'react-native'
import i18n from '../services/i18n'
import Loading from '../components/Loading'
import { createMeme } from '../services/request'

const CachedImage = imageCacheHoc(Image, {
  defaultPlaceholder: {
    component: Indicator,
    props: { style: { height: 200 } }
  }
})

interface InputsProps extends NavigationScreenProps {
  onChange(index: number): (val: string) => void
}

const Inputs = (props: InputsProps) => {
  const placeholders = props.navigation.getParam('placeholders')
  return (
    <View style={styles.inputsContainer}>
      {placeholders.map((text: string, index: number) => (
        <View style={styles.inputWrapper} key={index}>
          <Text style={styles.text}>{i18n.t('line', { num: index + 1 })}</Text>
          <TextInput
            style={styles.input}
            defaultValue=''
            placeholder={text}
            returnKeyType={placeholders.length === index + 1 ? 'done' : 'next'}
            onChangeText={props.onChange(index)}
          />
        </View>
      ))}
    </View>
  )
}

interface EditingScreenState {
  loading: boolean
  subs: string[]
}

class EditingScreen extends React.Component<
  NavigationScreenProps,
  EditingScreenState
  > {
  readonly state = {
    loading: false,
    subs: ['']
  }

  componentDidMount () {
    const length = this.props.navigation.getParam('placeholders').length
    this.setState({
      subs: new Array(length).fill('')
    })
  }

  public backToList = () => {
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
    this.setState({ loading: false })
    data && this.props.navigation.navigate('Display', data)
  }

  public render () {
    const { navigation } = this.props
    const gif = navigation.getParam('gif')
    return (
      <KeyboardAvoidingView behavior='position'>
        <ScrollView
          keyboardDismissMode='none'
          keyboardShouldPersistTaps='handled'
          showsVerticalScrollIndicator={false}
        >
          <CachedImage
            source={{ uri: gif }}
            style={{ alignSelf: 'stretch', height: 200, marginHorizontal: 16 }}
            borderRadius={12}
          />
          <Inputs onChange={this.onChange} navigation={navigation} />
          <Button title={i18n.t('editing_btn')} onPress={this.generate} />
          <Button title={i18n.t('home_btn')} onPress={this.backToList} />
        </ScrollView>
        <Loading mode='modal' visible={this.state.loading} />
      </KeyboardAvoidingView>
    )
  }
}

export default EditingScreen
