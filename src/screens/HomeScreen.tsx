import React from 'react'
import { FlatList, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import MemeItem from '../components/MemeItem'
import styles from './HomeScreen.styles'
import { listMemes, Meme } from '../services/request'
import Loading from '../components/Loading'

// import codePush from 'react-native-code-push'

// async function onPressSetting() {
//     await codePush.sync({
//         installMode: codePush.InstallMode.IMMEDIATE
//     })
// }

class HomeScreen extends React.Component<NavigationScreenProps> {
  readonly state = {
    data: []
  }

  async componentDidMount () {
    const data = await listMemes()
    this.setState({ data })
  }

  public renderItem = ({ item }: { item: Meme }) => {
    return <MemeItem item={item} />
  }

  public keyExtractor = (_: any, index: number) => {
    return '' + index
  }

  public renderSeparator = () => {
    return <View style={styles.separator} />
  }

  public render () {
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
