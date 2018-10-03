import React from 'react'
import { Image, Text, View } from 'react-native'
import { AssetImage } from '../services/asset'
import styles from './Loading.styles'

class Loading extends React.Component {
  public render () {
    return (
      <View style={styles.container}>
        <Image source={AssetImage.Loading} />
      </View>
    )
  }
}

export default Loading
