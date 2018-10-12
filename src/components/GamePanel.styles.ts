import { StyleSheet } from 'react-native'
import { Color, Size } from '../services/uikit'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Color.Mask,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  panel: {
    width: Size.DeviceWidth / 5 * 4,
    height: Size.DeviceHeight / 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
