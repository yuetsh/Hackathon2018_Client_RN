import React from 'react'
import {
  View,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Text
} from 'react-native'
import styles from './GamePanel.styles'
import { AssetImage, Size } from '../services/uikit'

class GamePanel extends React.Component {
  timer = 0
  timer1 = 0
  timer2 = 0
  timer3 = 0
  browWidth = Size.DeviceWidth * 0.8 + 33

  readonly state = {
    startGame: false,
    y: 130,
    r: 0,
    bird: AssetImage.Bird1,
    x0: 0,
    x1: this.browWidth,
    x2: Size.DeviceWidth * 0.8,
    x3: Size.DeviceWidth * 0.8
  }

  componentDidMount () {
    this.timer1 = setInterval(() => {
      this.setState({
        bird:
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
    }, 10)
    this.timer3 = setInterval(() => {
      if (this.state.x2 <= -80) {
        this.setState({ x2: Size.DeviceWidth * 0.8 + 80 })
      }
      this.setState({
        x2: this.state.x2 - 1
      })
    }, 10)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
    clearInterval(this.timer1)
    clearInterval(this.timer2)
    clearInterval(this.timer3)
  }

  tap = () => {
    if (this.state.y < 20) return
    if (!this.state.startGame) this.setState({ startGame: true })
    this.setState({ y: this.state.y - 30, r: -20 })
    if (this.timer) return
    this.timer = setInterval(() => {
      if (this.state.y > 310) {
        this.setState({
          y: 60
        })
      }
      this.setState({
        y: this.state.y + 2 // 下降为匀速运动
      })
    }, 10)
  }

  render () {
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
                top: this.state.y,
                zIndex: 100
              }}
            >
              <Text
                style={{
                  transform: [{ translateX: -15 }]
                }}
              >
                傻鸟一只
              </Text>
              <Image
                source={this.state.bird}
                style={{
                  width: 30,
                  height: 30,
                  transform: [{ rotate: this.state.r + 'deg' }]
                }}
              />
            </View>
            <View style={styles.browWrapper}>
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
            <View
              style={{
                position: 'absolute',
                top: 0,
                bottom: 55,
                left: this.state.x2
              }}
            >
              <Image
                source={AssetImage.PipeDown}
                style={{
                  position: 'absolute',
                  top: 0
                }}
              />
              <Text
                style={{
                  position: 'absolute',
                  top: 130,
                  transform: [{ translateX: -40 }]
                }}
              >
                毫无卵用的柱子1
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  top: 205,
                  transform: [{ translateX: -40 }]
                }}
              >
                毫无卵用的柱子2
              </Text>
              <Image
                source={AssetImage.PipeUp}
                style={{
                  position: 'absolute',
                  bottom: 0
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
