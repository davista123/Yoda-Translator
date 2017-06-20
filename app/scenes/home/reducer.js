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


const initialState = {
  post:'',
  isLoading: false,
}

export default function postsReducer(state = initialState, action){
  switch (action.type) {
    case POST_TEXT:
      return{
        ...state,
        text: action.text,
        author: action.author
      }
      break;

    case POST_TEXT_FAIL:
      return{
        ...state,
        message: action.message
      }
      break;

    case POST_TEXT_SUCCESS:
      return{
        ...state,
        message: action.message
      }
      break;


    case IS_LOADING:
      return{
        ...state,
      }
      break;


    case FETCH_RESPONSE:
        return{
          ...state,
          post: action.parsed_sentence
        }
      break;

    case FETCH_RESPONSE_SUCCESS:
        return{
            ...state,
            sentence: action.response
        }
      break;

    case FINISHED_LOADING:
      return{
        ...state,
      }
      break;

    default:
      return state;
  }

}
