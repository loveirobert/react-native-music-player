import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class PlayView extends Component {
  render() {
    return (
      <TouchableHighlight onPress={() => {
          Actions.playView()
        }}>
        <View>
          <View>
            <Text>
              {this.props.text}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}
