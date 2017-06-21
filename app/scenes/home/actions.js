import {
  FETCH_RESPONSE,
  FETCH_RESPONSE_FAIL,
  FETCH_RESPONSE_SUCCESS,
  IS_LOADING,
} from './constants';


//fun tip : ctrl+ arrow to move code block up or down

//helper function to use with fetchPost() action. Not necessarily an action
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

    let sentence = response.json()

    if(response){
      //returned to the calling function and not to the store.
      //TODO: either refactor code or get rid of redux references
      return{
        type: FETCH_RESPONSE_SUCCESS,
        response
      }
    }

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

  dispatch({
    type: IS_LOADING,
  })

  let sentence = await getYodaPosts("https://yoda.p.mashape.com/yoda?sentence="+post)
  parsed_sentence = sentence.response["_bodyText"]

  dispatch({
    type: FETCH_RESPONSE,
    parsed_sentence
  })

}
