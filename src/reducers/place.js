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
        toName: action.text
      }
    case 'START_DAY':
      return {
        ...state,
        startDate: action.date
      }
    case 'END_DATE':
      return{
        ...state,
        endDate: action.date
      }
    case 'ADD_ADULT':
      return{
        ...state,
        adults: state.adults + 1
      }
      break;
    default:
      return state
  }
}

const placeApp = combineReducers({
  place
})

export default placeApp;
