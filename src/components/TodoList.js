import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => {
  if (todos.length === 0) {
    return <h3>You have nothing to do!</h3>
  }

  return(
    <ul>
    { todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          {...todo}
          handleClick={() => onTodoClick(todo.id)}
        />
      )
    }) }
    </ul>
  )
}

export default TodoList
