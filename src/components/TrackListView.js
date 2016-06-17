import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ListView
} from 'react-native'

export default class TeackListView extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    const rows = []
    for (let i = 0; i < 100; i++) {
      rows.push(`Row ${i}`)
    }
    this.state = {
      dataSource: ds.cloneWithRows(rows),
    }
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
