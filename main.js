
import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import store from './app';
import Yoda from './app/scenes/home/components/yoda';

class App extends React.Component {
  render() {

    return (
        <Provider store = {store}>
          <Yoda/>
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
