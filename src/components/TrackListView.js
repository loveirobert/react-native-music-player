import React, { Component } from 'react'
import {
  StyleSheet, Text, ListView
} from 'react-native'
import TrackListItem from './TrackListItem'

export default class TeackListView extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    const rows = []
    for (let i = 0; i < 20; i++) {
      rows.push(`Row ${i}`)
    }
    this.state = {
      dataSource: ds.cloneWithRows(rows),
    }
  }
  render() {
    return (
      <ListView style={styles.view}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <TrackListItem text={rowData} />}
      />
    )
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: 50
  }
})
