import {
  FETCH_RESPONSE,
  FETCH_RESPONSE_FAIL,
  FETCH_RESPONSE_SUCCESS,
  IS_LOADING,
  FONT_LOADED,
  GET_WORD,
} from './constants';


const initialState = {
  fetched_post:'',
  isLoading: false,
  loadingText: '',
  yoda_word:'',
  fontLoad:false
}

export default function postsReducer(state = initialState, action){
  switch (action.type) {

    case IS_LOADING:
      return{
        ...state,
        isLoading: true,
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

    case FETCH_RESPONSE_FAIL:
        return{
            ...state,
            fetched_post: 'Sorry, an error seems to have occured. Please try again later',
        }
      break;

      case FETCH_RESPONSE_SUCCESS:
          return{
              ...state,
          }
        break;

      case FONT_LOADED:
          return{
              ...state,
              fontLoad: true
          }
        break;

        case GET_WORD:
            return{
                  ...state,
                  yoda_word: action.word,
          }
        break;



    default:
      return state;
  }

}
