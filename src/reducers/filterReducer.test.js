import { filterReducer } from './filterReducer'
import * as actions from '../actions'

describe('filterReducer', () => {
  it('should return the default state', () => {
    // setup
    const expected = 'SHOW_ALL'

    // execution
    const result = filterReducer(undefined, {})

    // expectation
    expect(result).toEqual(expected)
  })

  it('should set the filter', () => {
    // setup
    const initialFilter = 'SHOW_ALL'
    const expectedFilter = 'SHOW_COMPLETED'

    // execution
    const result = filterReducer(initialFilter, actions.setFilter(expectedFilter))

    // expectation
    expect(result).toEqual(expectedFilter)
  })
})
