import { StyleSheet } from 'react-native'

const borderRadius = 12

export default StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 12
  },
  templateWrapper: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9f9f9f',
    borderRadius
  },
  text: {
    textAlign: 'center',
    paddingTop: 8,
    fontSize: 20
  }
})
