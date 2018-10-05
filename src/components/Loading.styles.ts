import { StyleSheet } from 'react-native'
import { Color, Size } from '../services/uikit'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100
  },
  paneContainer: {
    width: Size.DeviceWidth,
    height: Size.DeviceHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.Mask,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1
  },
  pane: {
    width: 240,
    height: 240,
    backgroundColor: Color.White,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 100
  },
  inner: {
    width: 180,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    color: Color.InputText
  }
})
