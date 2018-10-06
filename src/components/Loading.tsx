import React from 'react'
import { Animated, Easing, View, Text } from 'react-native'
import { AssetImage } from '../services/uikit'
import styles from './Loading.styles'
import i18n from '../services/i18n'

interface LoadingProps {
  visible: boolean
  mode: 'fullscreen' | 'modal' | 'inner'
}

class Loading extends React.Component<LoadingProps> {
  static defaultProps = {
    visible: true,
    mode: 'fullscreen',
    title: ''
  }

  sizeValue = new Animated.Value(0)
  spinValue = new Animated.Value(0)

  componentDidMount () {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(this.sizeValue, {
            toValue: 1,
            duration: 300,
            easing: Easing.ease
          }),
          Animated.timing(this.sizeValue, {
            toValue: 0,
            duration: 300,
            easing: Easing.ease
          })
        ]),
        Animated.timing(this.spinValue, {
          toValue: 1,
          duration: 600,
          easing: Easing.linear
        })
      ])
    ).start()
  }

  render () {
    if (!this.props.visible) return null

    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    const size = this.sizeValue.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 140]
    })
    const imageStyle = {
      transform: [{ rotate: spin }],
      width: size,
      height: size,
      borderRadius: 20
    }
    if (this.props.mode === 'inner') {
      return (
        <View style={styles.inner}>
          <Animated.Image style={imageStyle} source={AssetImage.Loading} />
        </View>
      )
    } else if (this.props.mode === 'modal') {
      return (
        <View style={styles.paneContainer}>
          <View style={styles.pane}>
            <View style={styles.inner}>
              <Animated.Image style={imageStyle} source={AssetImage.Loading} />
            </View>
            <Text style={styles.text}>{i18n.t('loading_text')}</Text>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.inner}>
            <Animated.Image style={imageStyle} source={AssetImage.Loading} />
          </View>
          <Text style={styles.text}>{i18n.t('loading_text')}</Text>
        </View>
      )
    }
  }
}

export default Loading
