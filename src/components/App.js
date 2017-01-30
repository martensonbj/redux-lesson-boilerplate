import React, { Component } from 'react'
import AddTodoFormContainer from '../containers/AddTodoFormContainer'
import TodoListContainer from '../containers/TodoListContainer'
import FilterMenu from '../components/FilterMenu'

const App = () => {
  return (
    <section>
      <h1>My Todo List</h1>
      <AddTodoFormContainer />
      <FilterMenu />
      <TodoListContainer />
    </section>
  )
}

export default App
