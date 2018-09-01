import React from 'react'
import { View, Button, FlatList, Platform, Text } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import MemeItem from '../components/MemeItem'
import styles from './HomeScreen.styles'

interface HomeScreenProps extends NavigationScreenProps {}

class HomeScreen extends React.Component<HomeScreenProps> {
  static navigationOptions = {
    title: 'Home',
    headerRight: (
      <Button onPress={() => alert('This is a button!')} title='Info' />
    )
  }

  renderItem = (res: any) => {
    return <MemeItem item={res.item} />
  }

  keyExtractor = (item: any, index: number) => {
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
      <View style={styles.container}>
        <FlatList
          data={Array.from({ length: 10 }).fill(1)}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
        />
        <Button
          title='Go to Editing'
          onPress={() => this.props.navigation.navigate('Editing')}
        />
      </View>
    )
  }
}

export default HomeScreen
