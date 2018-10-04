import React from 'react'
import { Button, FlatList, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import Loading from '../components/Loading'
import MemeItem from '../components/MemeItem'
import i18n from '../services/i18n'
import { listMemes } from '../services/request'
import styles from './HomeScreen.styles'
import codePush from 'react-native-code-push'

interface HomeScreenProps extends NavigationScreenProps {}

async function onPressSetting () {
  await codePush.sync({
    installMode: codePush.InstallMode.IMMEDIATE
  })
}

class HomeScreen extends React.Component<HomeScreenProps> {
  public static navigationOptions = {
    title: i18n.t('home_title'),
    headerRight: <Button onPress={onPressSetting} title='Setting' />
  }
  public readonly state = {
    data: []
  }

  public async componentDidMount () {
    const data = await listMemes()
    this.setState({ data })
  }

  public renderItem = (res: any) => {
    return <MemeItem item={res.item} />
  }

  public keyExtractor = (_: any, index: number) => {
    return '' + index
  }

  public renderSeparator = () => {
    return <View style={styles.separator} />
  }

  public renderHeader = () => {
    return <View style={styles.listHeader} />
  }

  public renderFooter = () => {
    return <View style={styles.listFooter} />
  }

  public render () {
    const loading = !this.state.data.length
    if (loading) return <Loading />
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        ItemSeparatorComponent={this.renderSeparator}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={this.renderFooter}
      />
    )
  }
}

export default HomeScreen
