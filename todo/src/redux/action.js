
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";

export const addTodo = (tododetails) => {
  // return {
  //   type: ADD_TODO,
  //   payload: tododetails,
  // }
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('todos').add({
      ...tododetails
    }).then(() => {
      dispatch({ type: ADD_TODO, tododetails })
    }).catch((err) => {
      dispatch({ type: 'Todo Add error', err })
    })
  }
}

export function deleteTodo(title) {
  return {
    type: DELETE_TODO,
    payload: title,
  }
}


export function updateTodo(todo) {
  return {
    type: EDIT_TODO,
    payload: todo,
  }
}