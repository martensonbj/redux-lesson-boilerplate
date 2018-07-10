import React from 'react'

const Todo = ({text, completed, handleClick}) => {
  return (
    <li
      onClick={ handleClick }
      style={
      { textDecoration: completed ? 'line-through' : 'none' }
    }>
      {text}
    </li>
  )
}

export default Todo
