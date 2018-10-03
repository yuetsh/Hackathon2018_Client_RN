import React from 'react'
import { Animated, Easing, Image, View } from 'react-native'
import { AssetImage } from '../services/uikit'
import styles from './Loading.styles'

interface LoadingProps {
  visible: boolean
}

class Loading extends React.Component<LoadingProps> {
  static defaultProps = {
    visible: true
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

  public render () {
    if (!this.props.visible) return null

    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    const size = this.sizeValue.interpolate({
      inputRange: [0, 1],
      outputRange: [30, 40]
    })
    const imageStyle = {
      transform: [{ rotate: spin }],
      width: size,
      height: size,
      borderRadius: 20
    }
    return (
      <View style={styles.container}>
        <Animated.Image style={imageStyle} source={AssetImage.Loading} />
      </View>
    )
  }
}

export default Loading
