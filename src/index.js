import { combineReducers, createStore } from 'redux'
import whatIsMyName from './reducer';

export const reducer = combineReducers({
  whatIsMyName
})

const store = createStore(
  reducer
)

export default store;
