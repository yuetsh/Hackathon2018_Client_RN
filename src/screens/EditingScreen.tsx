import React from 'react'
import { Button, TextInput, View, Image } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import styles from './EditingScreen.styles'
import imageCacheHoc from 'react-native-image-cache-hoc'
import Indicator from '../components/Indicator'

const CachedImage = imageCacheHoc(Image, {
  defaultPlaceholder: {
    component: Indicator,
    props: { style: { height: 200 } }
  }
})

interface EditingScreenProps extends NavigationScreenProps {}

interface EditingScreenState {
  indicator: React.ComponentClass
}

class EditingScreen extends React.Component<
  EditingScreenProps,
  EditingScreenState
  > {
  public onPress = () => {
    this.props.navigation.navigate('Home')
  }

  public render () {
    const { navigation } = this.props
    const gif = navigation.getParam('gif')
    return (
      <View style={styles.container}>
        <CachedImage
          source={{ uri: gif }}
          style={{ alignSelf: 'stretch', height: 200 }}
          borderRadius={12}
        />
        <TextInput />
        <Button title='Home' onPress={this.onPress} />
      </View>
    )
  }
}

export default EditingScreen
