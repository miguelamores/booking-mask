import * as actions from '../actions';

describe('actions', () => {
  it('should create an action to add the origin country', () => {
    const text = 'Ecuador'
    const expectedAction = {
      type: 'ADD_FROM',
      text
    }
    expect(actions.addFrom(text)).toEqual(expectedAction)
  })

  it('should create an action to add the destination country', () => {
    const text = 'Brazil'
    const expectedAction = {
      type: 'ADD_TO',
      text
    }
    expect(actions.addTo(text)).toEqual(expectedAction)
  })

  it('should create an action to add the start date', () => {
    const date = '2018-01-27'
    const expectedAction = {
      type: 'START_DAY',
      date
    }
    expect(actions.startDate(date)).toEqual(expectedAction)
  })

  it('should create an action to add the end date', () => {
    const date = '2018-02-15'
    const expectedAction = {
      type: 'END_DATE',
      date
    }
    expect(actions.endDate(date)).toEqual(expectedAction)
  })
})
