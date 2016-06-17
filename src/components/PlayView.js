import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class PlayView extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text>This is going to be the play view!</Text>
        <Image source={this.props.imgSource} />
      </View>
    )
  }
}
