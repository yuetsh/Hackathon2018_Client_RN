import React from 'react'
import { FlatList, View, AsyncStorage } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import MemeItem from '../components/MemeItem'
import styles from './HomeScreen.styles'
import { listMemes, Meme } from '../services/request'
import Loading from '../components/Loading'
import i18n from '../services/i18n'
// import GamePanel from '../components/GamePanel'

// import GamePanel from '../components/GamePanel'

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
    await AsyncStorage.setItem('HomeData', JSON.stringify(data))
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
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        ItemSeparatorComponent={this.renderSeparator}
      />
    )
  }
}

export default HomeScreen
