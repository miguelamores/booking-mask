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
