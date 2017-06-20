
import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import store from './app';
//import MainApp from './src/MainApp'
import Home from './app/scenes/home/components/home';
import YodaFetch from './app/scenes/home/components/yoda_fetch';

class App extends React.Component {
  render() {

    return (
        <Provider store = {store}>
          <YodaFetch/>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
