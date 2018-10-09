import React from 'react'
import { FlatList, View, Button } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import MemeItem from '../components/MemeItem'
import styles from './HomeScreen.styles'
import { listMemes, Meme } from '../services/request'
import Loading from '../components/Loading'
import i18n from '../services/i18n'
import CachedImage from '../components/CachedImage'

// import codePush from 'react-native-code-push'

// async function onPressSetting() {
//     await codePush.sync({
//         installMode: codePush.InstallMode.IMMEDIATE
//     })
// }

class HomeScreen extends React.Component<NavigationScreenProps> {
  static navigationOptions = {
    title: i18n.t('home_title')
  }
  readonly state = {
    data: []
  }

  async componentDidMount () {
    const data = await listMemes()
    this.setState({ data })
  }

  clearCache = async () => {
    await CachedImage.flush()
  }

  renderItem = ({ item }: { item: Meme }) => {
    return <MemeItem item={item} />
  }

  keyExtractor = (_: any, index: number) => {
    return '' + index
  }

  renderSeparator = () => {
    return <View style={styles.separator} />
  }

  render () {
    if (!this.state.data.length) {
      return <Loading mode='fullscreen' />
    }
    return (
      <React.Fragment>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
        />
        <Button onPress={this.clearCache} title='Clear Cache' />
      </React.Fragment>
    )
  }
}

export default HomeScreen
