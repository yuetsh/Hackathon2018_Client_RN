import { Dimensions, PixelRatio } from 'react-native'

const WindowDimensions = Dimensions.get('window')

export const AssetImage = {
  Loading: require('../assets/images/huaji.jpg'),
  FlappyBirdBG: require('../assets/images/bg.png'),
  Bird1: require('../assets/images/bird1.png'),
  Bird2: require('../assets/images/bird2.png'),
  Bird3: require('../assets/images/bird3.png'),
  Brow: require('../assets/images/bg-brow.png'),
  PipeDown: require('../assets/images/pipe-down.png'),
  PipeUp: require('../assets/images/pipe-up.png')
}

export const Color = {
  Transparent: 'transparent',
  White: '#fff',
  Mask: 'rgba(15, 15, 15, 0.6)',
  InputText: '#333'
}

export const Size = {
  Ratio: PixelRatio.get(),
  DeviceWidth: WindowDimensions.width,
  DeviceHeight: WindowDimensions.height,
  StatusBarHeight: 20,
  NavBarHeight: 44,
  ContainerPaddingHorizontal: 8,
  MemeRadius: 6,
  MemeHeight: Math.round((Dimensions.get('window').width - 2 * 8) * 185 / 316)
}
