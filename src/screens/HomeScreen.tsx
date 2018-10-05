import React from 'react'
import { FlatList, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import MemeItem from '../components/MemeItem'
import styles from './HomeScreen.styles'
import { HomeAsset, HomeAssets } from '../services/uikit'

// import codePush from 'react-native-code-push'

interface HomeScreenProps extends NavigationScreenProps {}

// async function onPressSetting() {
//     await codePush.sync({
//         installMode: codePush.InstallMode.IMMEDIATE
//     })
// }

class HomeScreen extends React.Component<HomeScreenProps> {
  public renderItem = ({ item }: { item: HomeAsset }) => {
    return <MemeItem item={item} />
  }

  public keyExtractor = (_: any, index: number) => {
    return '' + index
  }

  public renderSeparator = () => {
    return <View style={styles.separator} />
  }

  public render () {
    return (
      <FlatList
        data={HomeAssets}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        ItemSeparatorComponent={this.renderSeparator}
      />
    )
  }
}

export default HomeScreen
