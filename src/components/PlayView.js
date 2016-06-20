import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Sound from 'react-native-sound'

export default class PlayView extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const whoosh = new Sound('whoosh.mp3', '', (error) => {
      if (error) {
        console.log('failed to load the sound', error);
      } else { // loaded successfully
        whoosh.setVolume(5)
        whoosh.play((success) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        })
        console.log('duration in seconds: ' + whoosh.getDuration() +
            'number of channels: ' + whoosh.getNumberOfChannels());
      }
    })
    return (
      <View>
        <Text>This is going to be the play view!</Text>
        <Image source={this.props.imgSource} />
      </View>
    )
  }
}
