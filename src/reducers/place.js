import { combineReducers } from 'redux';
import { getCountries } from '../actions';
import { initialState } from './initialState';

export const place = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COUNTRIES':
      return {state}
    case 'ADD_FROM':
      return {
        ...state,
        fromName: action.text
      }
    case 'ADD_TO':
      return {
        ...state,
        ToName: action.text
      }
    default:
      return state
  }
}

const placeApp = combineReducers({
  place
})

export default placeApp;
