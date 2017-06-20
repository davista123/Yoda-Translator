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
    console.log("initial state:",store.getState())
    await this.props.fetchPost("Ginos pizza tastes very bad")
    console.log("final state:",store.getState())
  }

  render(){
    return(
      <View style = {styles.container}>
        <Text>
          {this.props.post}
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

mapStateToProps = (state) => {
  return{
    post: state.postsReducer.post
  }
}

export default connect(mapStateToProps, actions)(YodaFetch)
