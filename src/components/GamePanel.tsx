import React from 'react'
import {
  View,
  ImageBackground,
  Image,
  TouchableWithoutFeedback
} from 'react-native'
import styles from './GamePanel.styles'
import { AssetImage, Size } from '../services/uikit'

interface GamePanelProps {
  visible: boolean
}

class GamePanel extends React.Component<GamePanelProps> {
  timer = 0
  timer1 = 0
  timer2 = 0
  browWidth = Size.DeviceWidth * 0.8 + 33

  readonly state = {
    startGame: false,
    y: 130,
    r: 0,
    bird: AssetImage.Bird1,
    x0: 0,
    x1: this.browWidth
  }

  componentDidMount () {
    this.timer1 = setInterval(() => {
      this.setState({
        source:
          this.state.bird === AssetImage.Bird1
            ? AssetImage.Bird2
            : this.state.bird === AssetImage.Bird2
              ? AssetImage.Bird3
              : AssetImage.Bird1
      })
    }, 100)
    this.timer2 = setInterval(() => {
      this.setState({ x0: this.state.x0 - 1, x1: this.state.x1 - 1 })
      if (this.state.x0 <= -this.browWidth) this.setState({ x0: 0 })
      if (this.state.x1 <= 0) this.setState({ x1: this.browWidth })
    }, 16)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
    clearInterval(this.timer1)
    clearInterval(this.timer2)
  }

  tap = () => {
    if (this.state.y < 20) return
    if (!this.state.startGame) this.setState({ startGame: true })
    this.setState({ y: this.state.y - 30, r: -20 })
    if (this.timer) return
    this.timer = setInterval(() => {
      if (this.state.y > 320) return
      this.setState({
        y: this.state.y + 2
      })
    }, 16)
  }

  render () {
    if (!this.props.visible) return null
    return (
      <TouchableWithoutFeedback onPress={this.tap}>
        <View style={styles.container}>
          <ImageBackground
            source={AssetImage.FlappyBirdBG}
            style={styles.panel}
            borderRadius={12}
          >
            <View
              style={{
                position: 'absolute',
                left: 120,
                top: this.state.y
              }}
            >
              <Image
                source={this.state.bird}
                style={{
                  width: 30,
                  height: 30,
                  transform: [{ rotate: this.state.r + 'deg' }]
                }}
              />
            </View>
            <View
              style={{
                width: Size.DeviceWidth / 5 * 4,
                position: 'absolute',
                height: 56,
                left: 0,
                bottom: 0,
                overflow: 'hidden',
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12
              }}
            >
              <Image
                source={AssetImage.Brow}
                style={{
                  position: 'absolute',
                  left: this.state.x0
                }}
              />
              <Image
                source={AssetImage.Brow}
                style={{
                  position: 'absolute',
                  left: this.state.x1
                }}
              />
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default GamePanel
