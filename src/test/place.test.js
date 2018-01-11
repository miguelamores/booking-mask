import placeApp from '../reducer/place';
import { initialState } from '../reducers/initialState';

describe('Place reducer', () => {
  it('should return the initial state', () => {
    expect(placeApp.place(undefined, {})).toEqual(initialState)
  })

  it('should handle add origin country', () => {
    expect(
      placeApp([], {
        type: 'ADD_FROM',
        text: 'Brazil'
      })
    ).toEqual
  })
})
