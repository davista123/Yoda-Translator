import {
  FETCH_RESPONSE,
  FETCH_RESPONSE_FAIL,
  FETCH_RESPONSE_SUCCESS,
  IS_LOADING,
} from './constants';


const initialState = {
  fetched_post:'',
  isLoading: false,
  loadingText: '',
  yoda_word:'',

}

export default function postsReducer(state = initialState, action){
  switch (action.type) {

    case IS_LOADING:
      return{
        ...state,
        isLoading: true,
        yoda_word: '',
        loadingText: "...Thinking, Yoda is",
      }
      break;

    case FETCH_RESPONSE:
        return{
          ...state,
          fetched_post: action.parsed_sentence,
          isLoading: false,
          loadingText:'',
        }
      break;

    case FETCH_RESPONSE_SUCCESS:
        return{
            ...state,
        }
      break;

    default:
      return state;
  }

}
