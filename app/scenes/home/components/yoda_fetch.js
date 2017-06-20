import React,{
  Component
} from 'react';

import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Spinner,
  List,
  ListItem,
  InputGroup,
  Icon,
  Input,
  Button,
} from 'native-base'

import {
  connect
} from 'react-redux';

import store from '../../../';

import * as actions from '../actionTypes';

import Expo from 'expo';

console.disableYellowBox = true

class YodaFetch extends Component{

  constructor(props){
    super(props);
    this.state = {
      yoda_word: '',
      fontLoaded: false
    }
    this.getYoda = this.getYoda.bind(this)

  }

  async componentWillMount(){
    await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
    this.setState({
      fontLoaded:true
    })
  }


  renderLoading = () => {
    return (
      <View style={styles.container}>
       <Spinner color='blue' />
       </View>
      );
  }


  async getYoda(){
    console.log("Initial state:", store.getState())
    await this.props.fetchPost(this.state.yoda_word)
    console.log("Final state:", store.getState())
  }


  renderContent=()=>{
    return(
      <View style = {styles.container}>
      <Container>
        <Content>

          <Card>
            <CardItem>
        <Text>I say: </Text>
            </CardItem>
          </Card>

        <Card>
          <CardItem>
                <InputGroup borderType = "rounded">
                       <Input  placeholder="I say"
                       onChangeText={(yoda_word) => this.setState({yoda_word})}
                       value = {this.state.yoda_word} />
                      <Icon name="ios-happy" />
                </InputGroup>
            </CardItem>
        </Card>

        <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
            onPress = {this.getYoda}>
            <Text>Translate</Text>
        </Button>

        <Card>
          <CardItem>
            <Text>
                Yoda Says: {this.props.fetched_post}
            </Text>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Text>
                {this.props.loadingText}
            </Text>
          </CardItem>
        </Card>


        </Content>

      </Container>
      </View>
    );
  }


  render(){
    if(!this.state.fontLoaded){
      return this.renderLoading();
    }
    return(
        this.renderContent()
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
    loadingText: state.postsReducer.loadingText,
  }
}

export default connect(mapStateToProps, actions)(YodaFetch)
