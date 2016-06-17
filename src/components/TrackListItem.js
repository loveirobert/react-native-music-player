import React, { Component } from 'react'
import { View, Text, TouchableHighlight, StyleSheet,
         Image } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class PlayView extends Component {
  render() {
    const imgSource = require('../images/nature.jpg')
    return (
      <TouchableHighlight onPress={() => {
        Actions.playView({imgSource})
      }}>
        <View style={styles.listItem}>
          <Image style={styles.listItemThumb} source={imgSource} />
          <Text style={styles.listItemText}>
            {this.props.text}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    paddingLeft: 10,
    backgroundColor: '#F6F6F6'
  },
  listItemText: {
    fontSize: 20,
    flex: 1,
    marginLeft: 5
  },
  listItemThumb: {
    width: 50,
    height: 50
  }
})
