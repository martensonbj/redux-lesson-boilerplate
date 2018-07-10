import React from 'react'
import { shallow } from 'enzyme'
import { AddTodoForm, mapStateToProps, mapDispatchToProps } from './AddTodoForm'
import { addTodo } from '../actions'

describe('AddTodoForm', () => {

  describe('AddTodoForm', () => {
    it('should match the snapshot', () => {
      const wrapper = shallow(<AddTodoForm />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should call handleSubmit when the form is submitted', () => {
      const mockHandleSubmit = jest.fn()
      const mockTodos = []
      const mockEvent = { preventDefault: jest.fn() }
      const wrapper = shallow(<AddTodoForm handleSubmit={mockHandleSubmit} todos={mockTodos} />)

      wrapper.instance().submitForm(mockEvent)

      expect(mockHandleSubmit).toHaveBeenCalled()
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object with the todos array', () => {
      // setup
      const text = 'Conquer testing'
      const id = 1
      const mockState = {
        todos: [{ text, id, completed: false }],
        filter: 'SHOW_ALL'
      }
      const expected = {
        todos: [{ text, id, completed: false }]
      }

      // execution
      const mappedProps = mapStateToProps(mockState)
      console.log(mappedProps)

      // expectation
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a function from MDTP', () => {
      // setup
      const mockDispatch = jest.fn()
      const actionToDispatch = addTodo('Learn Redux', 1)

      // execution
      const mappedProps = mapDispatchToProps(mockDispatch)
      console.log(mappedProps)

      mappedProps.handleSubmit('Learn Redux', 1)

      // expectation
      expect(mockDispatch).toBeCalledWith(actionToDispatch)
    })
  })

})
