import React, { Component } from 'react'
import { addTodo } from '../actions'
import { connect } from 'react-redux'

export class AddTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  resetForm = () => {
    this.setState({ text: '' })
  }

  submitForm = (e) => {
    const { handleSubmit, todos } = this.props
    e.preventDefault()
    handleSubmit(this.state.text, todos.length)
    this.resetForm()
  }

  render() {
    return (
      <section>
        <form onSubmit={this.submitForm}>
          <input
            value={this.state.text}
            placeholder="Add A Todo"
            onChange={this.handleChange} />
          <button>Add Todo</button>
        </form>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  todos: state.todos
})

export const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (text, id) => dispatch(addTodo(text, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)
