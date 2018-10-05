import { Dimensions, PixelRatio } from 'react-native'

const WindowDimensions = Dimensions.get('window')

export const AssetImage = {
  Loading: require('../assets/images/huaji.jpg')
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
  NavBarHeight: 44
}
