import {
  POST_TEXT,
  POST_TEXT_FAIL,
  POST_TEXT_SUCCESS,
  FETCH_RESPONSE,
  FETCH_RESPONSE_FAIL,
  FETCH_RESPONSE_SUCCESS,
  IS_LOADING,
  FINISHED_LOADING,
} from './constants';

import store from '../../';

export  const postText = (text, author) => {
    return {
    type: POST_TEXT,
    text,
    author
  }
}

export  const postFail = (message) => {
  return {
    type: POST_TEXT_FAIL,
    message
  }
}

//ctrl+ arrow to move code block up or down

export  const postSuccess = (message) => {
    return {
    type: POST_TEXT_SUCCESS,
    message
  }
}

export  const renderSpinner = () => {
    return {
    type: IS_LOADING
  }
}

export  const renderLoaded = () => {
    return {
    type: FINISHED_LOADING
  }
}

async function getYodaPosts(url){
  try{
    let response = await fetch(url, {
                          method: 'GET',
                          headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'X-Mashape-Key': "84c0Z5YMbTmsh6OTdE01YEopFjxPp1nDdF0jsnVzpZEUXXHrNk",
                            'Accept': "text/plain"
                          },
                        })


    //set state to loading here
    //console.log("Response:",response)
    let sentence = response.json()
  //  console.log("Sentence: ",sentence)
    if(response){
      //returned to the calling function and not to the store.
      //either refactor code or get rid of redux references
      return{
        type: FETCH_RESPONSE_SUCCESS,
        response
      }
    }

  //  return sentence
  //84c0Z5YMbTmsh6OTdE01YEopFjxPp1nDdF0jsnVzpZEUXXHrNk
  }
  catch(error){
    console.log(error)
    return{
      type: FETCH_RESPONSE_FAIL,
      error
    }
  }
}

export const fetchPost = (post) =>  async dispatch => {
  //let post = "Foo Foo is bloody expensive"
  dispatch({
    type: IS_LOADING,
  })

  let sentence = await getYodaPosts("https://yoda.p.mashape.com/yoda?sentence="+post)
  parsed_sentence = sentence.response["_bodyText"]
  //let sentence = "Hello"

  console.log("Loading phase:",store.getState())
  //https://yoda.p.mashape.com/yoda
  //console.log("Yoda says: ",parsed_sentence)
  dispatch({
    type: FETCH_RESPONSE,
    parsed_sentence
  })

}
