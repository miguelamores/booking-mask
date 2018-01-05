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

// export const getCountries = (countries) => {
//   return {
//     type: 'GET_COUNTRIES',
//     countries
//   }
// }
