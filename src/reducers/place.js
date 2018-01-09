import { combineReducers } from 'redux';
//import { getCountries } from '../actions';
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
    default:
      return state
  }
}

const initialState2 = {
  adults: 0,
  children: 0,
  infants: 0
}

export const passenger = (state = initialState2, action) => {
  switch (action.type) {
    case 'ADD_ADULT':
      return{
        ...state,
        adults: state.adults + 1
      }
    case 'REMOVE_ADULT':
      return{
        ...state,
        adults: state.adults - 1
      }
    case 'ADD_CHILDREN':
      return{
        ...state,
        children: state.children + 1
      }
    case 'REMOVE_CHILDREN':
      return{
        ...state,
        children: state.children - 1
      }
    case 'ADD_INFANT':
      return{
        ...state,
        infants: state.infants + 1
      }
    case 'REMOVE_INFANT':
      return{
        ...state,
        infants: state.infants - 1
      }
      break;
    default:
      return state
  }
}

const search = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      console.log(state);
      return{
        state
      }
      break;
    default:
      return state
  }

}

const placeApp = combineReducers({
  place,
  passenger,
  search
})

export default placeApp;
