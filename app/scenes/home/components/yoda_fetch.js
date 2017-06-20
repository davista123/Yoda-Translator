import React,{
  Component
} from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

import {
  connect
} from 'react-redux';

import store from '../../../';

import * as actions from '../actionTypes';


class YodaFetch extends Component{

  constructor(props){
    super(props);
  }

  async componentWillMount(){
    await this.props.fetchPost()
    console.log("state:",store.getState())
  }

  render(){
    return(
      <View style = {styles.container}>
        <Text>
          This is the homepage!!!!
        </Text>
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

export default connect(null, actions)(YodaFetch)
