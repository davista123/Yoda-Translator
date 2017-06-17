import whatIsMyName from './actions';
import reducer from './'

//store.dispatch(sayName("David"))
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux'
import store from './'


class MainApp extends Component{

  componentDidMount(){
      console.log("Initial state:",store.getState())
      store.dispatch(sayName("David"))
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

export default connect()(MainApp)
