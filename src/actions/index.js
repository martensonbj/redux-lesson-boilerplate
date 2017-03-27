export const addTodo = (text, id) => {
  return {
    type: 'ADD_TODO',
    text: text,
    id: id
  }
}
