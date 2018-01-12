/*
Action creators to add origin and destination place
Action creators to add start and end date
Action creators to add adults, children and infants
*/

export const addFrom = text => {
  return {
    type: 'ADD_FROM',
    text
  }
}

export const addTo = text => {
  return {
    type: 'ADD_TO',
    text
  }
}

export const getCountries = () => {
  return {
    type: 'GET_COUNTRIES'
  }
}

export const startDate = date => {
  return {
    type: 'START_DAY',
    date
  }
}

export const endDate = date => {
  return {
    type: 'END_DATE',
    date
  }
}

export const addAdult = () => {
  return {
    type: 'ADD_ADULT'
  }
}

export const removeAdult = () => {
  return {
    type: 'REMOVE_ADULT'
  }
}

export const addChildren = () => {
  return {
    type: 'ADD_CHILDREN'
  }
}

export const removeChildren = () => {
  return {
    type: 'REMOVE_CHILDREN'
  }
}

export const addInfant = () => {
  return {
    type: 'ADD_INFANT'
  }
}

export const removeInfant = () => {
  return {
    type: 'REMOVE_INFANT'
  }
}

export const search = () => {
  return {
    type: 'SEARCH'
  }
}
