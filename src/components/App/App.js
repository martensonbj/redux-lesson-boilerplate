import React, { Component } from 'react';
import AddToDoForm from '../../containers/AddToDoForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My ToDo List</h1>
        <AddToDoForm />
      </div>
    );
  }
}

export default App;
