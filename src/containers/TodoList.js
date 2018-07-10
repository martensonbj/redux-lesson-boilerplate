import React from 'react'
import Todo from '../components/Todo'
import { toggleTodo } from '../actions'
import { connect } from 'react-redux'

const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
    default:
      return new Error('Unknown filter: ' + filter)
  }
}

const TodoList = ({todos, onTodoClick}) => {

  const displayTodos = todos.map(todo => (
    <Todo {...todo} key={todo.id} handleClick={() => onTodoClick(todo.id)} />
  ))

  return (
    <ul>
      {displayTodos}
    </ul>
  )
}
const mapStateToProps = (state) => ({
  todos: getFilteredTodos(state.todos, state.filter)
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
