import React, { Component } from 'react';
import './App.css';

// import AddTodoForm from './AddTodoForm';
import AddTodoFormContainer from '../containers/AddTodoFormContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodoFormContainer />
      </div>
    );
  }
}

export default App;
