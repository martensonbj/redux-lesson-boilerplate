import React, { Component } from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

class AddToDoForm extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  submitForm = (e) => {
    const {todos, handleSubmit} = this.props
    e.preventDefault()
    handleSubmit(this.state.text, todos.length)
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  render() {
    return(
      <section>
        <form onSubmit={this.submitForm}>
          <input 
            value={this.state.text}
            placeholder='Add a Todo'
            onChange={this.handleChange}
          />
          <button>Add Todo</button>
        </form>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (text, id) => dispatch(addTodo(text, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddToDoForm)