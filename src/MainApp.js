import whatIsMyName from './actions';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux'
import store from './'

import * as actions from './actionTypes';


class MainApp extends Component{

  componentDidMount(){
      console.log("Initial state:",store.getState())
      console.log(this.props.sayName("David"))
      this.props.sayName("David")
      console.log("Final state:",store.getState())
  }

  render(){
    return(
    <View style={styles.container}>
      <Text>Not connected</Text>
    </View>
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

export default connect(null, actions)(MainApp)
