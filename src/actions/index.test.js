import * as actions from './index'

describe('actions', () => {
  it('should return a type of ADD_TODO, with a todo', () => {
    // expect(true).toEqual(false)

    // setup
    const text = 'Learn Redux'
    const id = 1
    const expected = {
      type: 'ADD_TODO',
      text,
      id
    }

    // execution
    const result = actions.addTodo(text, id)

    // expectation
    expect(result).toEqual(expected)
  })

  it('should return a type of TOGGLE_TODO, with an id', () => {

    // setup
    const id = 1
    const expected = {
      type: 'TOGGLE_TODO',
      id
    }

    // execution
    const result = actions.toggleTodo(id)

    // execution
    expect(result).toEqual(expected)
  })

  it('should return a type of SET_FILTER, with a filter', () => {
    // setup
    const filter = 'SHOW_ALL'
    const expected = {
      type: 'SET_FILTER',
      filter
    }

    // execution
    const result = actions.setFilter(filter)

    // expectation
    expect(result).toEqual(expected)
  })
})
