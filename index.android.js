import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet
} from 'react-native'

import { Router, Scene } from 'react-native-router-flux';

import PlayView from './src/components/PlayView'
import TrackListView from './src/components/TrackListView'

class reactAudio extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="trackListView" component={TrackListView} title="TrackList" initial={true} />
          <Scene key="playView" component={PlayView} title="Play" />
        </Scene>
      </Router>
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

AppRegistry.registerComponent('reactAudio', () => reactAudio)
