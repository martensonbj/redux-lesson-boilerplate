import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodoForm from '../components/AddTodoForm'

const mapStateToProps = (state) => {
  console.log(state)
  return { todos: state.todosReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (text, id) => {
      console.log(text, id);
      dispatch(addTodo(text, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)
