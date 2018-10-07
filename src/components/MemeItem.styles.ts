import { StyleSheet } from 'react-native'
import { Size } from '../services/uikit'

export default StyleSheet.create({
  container: {
    paddingHorizontal: Size.ContainerPaddingHorizontal,
    alignItems: 'center'
  },
  text: {
    paddingTop: 4,
    fontSize: 18
  }
})
