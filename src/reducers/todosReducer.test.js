import { todosReducer } from './todosReducer'
import * as actions from '../actions'

describe('todosReducer', () => {
  it('should return the initial state', () => {
    // setup
    const expected = []

    // execution
    const result = todosReducer(undefined, {})

    // execution
    expect(result).toEqual(expected)
  })

  it('should return the state with a new todo', () => {
    // setup
    const text = 'Test Reducers'
    const id = 1
    const expected = [{ text, id, completed: false }]

    // execution
    const result = todosReducer(undefined, actions.addTodo(text, id))

    // expectation
    expect(result).toEqual(expected)
  })

  it('should toggle the commpleted property of a todo', () => {
    // setup
    const text = 'Test Reducers'
    const id = 1
    const currentState = [{ text, id, completed: false }]
    const expected = [{ text, id, completed: true }]

    // execution
    const result = todosReducer(currentState, actions.toggleTodo(id))

    // expectation
    expect(result).toEqual(expected)
  })

})
