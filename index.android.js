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
    const getSceneStyle = this.getSceneStyle
    const getNavigationBarStyle = this.getNavigationBarStyle
    return (
      <Router navigationBarStyle={{height: 50}} titleStyle={{marginTop: 0, top: 15}}>
        <Scene key="root">
          <Scene key="trackListView" component={TrackListView} title="TrackList" initial={true} />
          <Scene key="playView" component={PlayView} title="Play" />
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('reactAudio', () => reactAudio)
