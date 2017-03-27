import React, { Component } from 'react';

class AddTodoForm extends Component {
  constructor() {
    super()
    this.state = { text: '' }
  }


  render() {
    const { handleSubmit, todos } = this.props

    return (
      <form onSubmit={ (e) => {
        e.preventDefault()
        handleSubmit(this.state.text, todos.length)
      }}>
        <input
          placeholder="Enter A Todo"
          type="text"
          value={ this.state.text }
          onChange={e => this.setState({ text: e.target.value })}
        />

        <button>Add Todo</button>
      </form>
    )
  }
}

export default AddTodoForm;
