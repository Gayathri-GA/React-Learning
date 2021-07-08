const initState = {
  todos: [],
  text: "",
  selected: undefined
};


const todos = (state = initState, action) => {
  console.log(action, 'ACTIONNN');
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state.todos,
        action.payload
      ]
    // case 'DELETE_TODO':
    //   return state.map(todo =>
    //     (todo.id === action.id)
    //       ? { ...todo, completed: !todo.completed }
    //       : todo
    //   )
    default:
      return state
  }
}

export default todos;