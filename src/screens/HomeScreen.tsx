import React from 'react'
import { View, Button, FlatList, Platform, Text } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import MemeItem from '../components/MemeItem'
import styles from './HomeScreen.styles'
import { listMemes } from '../services/request'
import i18n from '../services/i18n'

interface HomeScreenProps extends NavigationScreenProps {}

class HomeScreen extends React.Component<HomeScreenProps> {
  readonly state = {
    data: []
  }
  static navigationOptions = {
    title: i18n.t('home_title'),
    headerRight: (
      <Button onPress={() => alert('This is a button!')} title='Info' />
    )
  }

  async componentDidMount () {
    const data = await listMemes()
    this.setState({ data })
  }

  renderItem = (res: any) => {
    return <MemeItem item={res.item} />
  }

  keyExtractor = (_: any, index: number) => {
    return '' + index
  }

  renderSeparator = () => {
    return <View style={styles.separator} />
  }

  renderHeader = () => {
    return <View style={styles.listHeader} />
  }

  renderFooter = () => {
    return <View style={styles.listFooter} />
  }

  render () {
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
