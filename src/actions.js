import {
  SAY_NAME
} from './constants';

import store from './'

export  const sayName = (name) => {
    return {
    type: SAY_NAME,
    name
  }
  console.log("Say name action has now been called")
}
