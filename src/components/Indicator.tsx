import React from 'react'
import Loading from './Loading'
import { View } from 'react-native'

const Indicator = () => (
  <View style={{ alignSelf: 'center' }}>
    <Loading mode='inner' />
  </View>
)
export default Indicator
