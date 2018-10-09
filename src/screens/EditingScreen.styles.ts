import { StyleSheet } from 'react-native'
import { Size } from '../services/uikit'

export default StyleSheet.create({
  container: {},
  inputsContainer: {
    marginTop: 12,
    paddingHorizontal: Size.ContainerPaddingHorizontal
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  text: {
    fontSize: 18,
    marginRight: 12
  },
  input: {
    fontSize: 18,
    flex: 1
  },
  buttonWrapper: {
    marginBottom: 8
  }
})
