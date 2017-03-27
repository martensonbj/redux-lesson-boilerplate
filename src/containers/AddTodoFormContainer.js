import { connect } from 'react-redux';
import { addTodo } from '../actions/index.js'
import AddTodoForm from '../components/AddTodoForm';

const mapStateToProps = (state) => {
  return { todos: state.todos }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (text, id) => {
      dispatch(addTodo(text, id))
    }
  }
}

const AddTodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)

export default AddTodoFormContainer;
