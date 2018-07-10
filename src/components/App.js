import React, { Component } from 'react';
import AddTodoForm from '../containers/AddTodoForm';
import FilterMenu from './FilterMenu'
import TodoList from '../containers/TodoList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My ToDo List</h1>
        <AddTodoForm />
        <FilterMenu />
        <TodoList />
      </div>
    );
  }
}

export default App;
