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

import store from '../../../';
import {connect} from 'react-redux';
import * as actions from '../actionTypes';

//console.disableYellowBox = true;

class Home extends Component{

  constructor(){
    super();
    this.state = {
      text: '',
    }
    this.add_post = this.add_post.bind(this)
  }

  add_post = () => {
    this.props.postText(this.state.text,"David")
    console.log("Store:",store.getState())
  }

  /*
    componentDidMount(){
        console.log("Initial state:",store.getState())
        console.log(this.props.postText("I am speaking like Yoda","David"))
        this.props.postText("I am speaking like Yoda","David")
        console.log("Final state:",store.getState())
    }
*/

  render(){
    return(
      <View style = {styles.container}>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        editable = {true}
        maxLength={400}
        onChangeText={(text) => this.setState({text})}/>
      <Text onPress={this.add_post}>________ADD______________</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(null, actions)(Home)
