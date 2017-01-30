import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

// Based on what filter the user has clicked, what todos do we want to work with?

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

// What part(s) of state does the component care about?

const mapStateToProps = (state) => ({
  todos: getFilteredTodos(state.todosReducer, state.filterReducer)
})

// What are we handing down as an event listener (also coming through as a prop), and what reducer is organizing what that action needs?

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id))
  }
})

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer
