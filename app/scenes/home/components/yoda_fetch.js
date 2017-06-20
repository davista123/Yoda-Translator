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
    this.state = {
      yoda_word: '',
    }
    this.getYoda = this.getYoda.bind(this)

  }
/*
  async componentWillMount(){
    console.log("initial state:",store.getState())
    await this.props.fetchPost("You are gifted")
    console.log("final state:",store.getState())
  }
*/

  async getYoda(){
    await this.props.fetchPost(this.state.yoda_word)
  }

  render(){
    return(
      <View style = {styles.container}>
        <Text>I say: </Text>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          editable = {true}
          maxLength={400}
          onChangeText={(yoda_word) => this.setState({yoda_word})}
          />

        <Button
          onPress={this.getYoda}
          title="Post"
          color="blue"
          accessibilityLabel="Learn more about this purple button"
        />

        <Text>
        Yoda Says:   {this.props.fetched_post}
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
    fetched_post: state.postsReducer.fetched_post,
    isLoading: state.postsReducer.isLoading,
    errorMessage:state.postsReducer.errorMessage,
    post: state.postsReducer.post,
  }
}

export default connect(mapStateToProps, actions)(YodaFetch)
