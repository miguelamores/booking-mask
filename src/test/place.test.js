import placeApp from '../reducer/place';
import { initialState } from '../reducers/initialState';

describe('Passenger reducer', () => {
  it('should return the initial state', () => {
    expect(placeApp.place(undefined, {})).toEqual(initialState)
  })

  it('should handle add an adult', () => {
    expect(
      placeApp([
        {
          adults: 0,
          children: 0,
          infants: 0
        }
      ], {
        type: 'ADD_ADULT'
      })
    ).toEqual([
      {
        adults: 1,
        children: 0,
        infants: 0
      }
    ])
  })

  it('should handle add children', () => {
    expect(
      placeApp([
        {
          adults: 0,
          children: 0,
          infants: 0
        }
      ], {
        type: 'ADD_CHILDREN'
      })
    ).toEqual([
      {
        adults: 0,
        children: 1,
        infants: 0
      }
    ])
  })

  it('should handle add infants', () => {
    expect(
      placeApp([
        {
          adults: 0,
          children: 0,
          infants: 0
        }
      ], {
        type: 'ADD_INFANT'
      })
    ).toEqual([
      {
        adults: 0,
        children: 0,
        infants: 1
      }
    ])
  })

})
