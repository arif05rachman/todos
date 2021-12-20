import * as type from "../types";

const initialState = {
  todos: [],
  todo: {},
  loading: false,
  error: null,
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case type.GET_TODOS_REQUESTED:
      return {
        ...state,
      };
    case type.GET_TODO_REQUESTED:
      const getId = action.payload;
      const findtodo = state.todos.find((item) => item.id === getId);
      return {
        ...state,
        todo: findtodo,
      };
    case type.ADD_TODO_REQUESTED:
      const id = state.todos.length + 1;
      const newTodo = { ...action.payload, id, key: id };
      const newTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: newTodos,
      };
    case type.UPDATE_TODO_REQUESTED:
      const doneTodo = action.payload;
      const doneTodos = state.todos.map((item) => {
        if (item.id === doneTodo.id) {
          return { ...item, ...doneTodo };
        }
        return item;
      });
      return {
        ...state,
        todos: doneTodos,
      };
    case type.REMOVE_TODO_REQUESTED:
      const removeTodos = state.todos.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        todos: removeTodos,
      };
    case type.GET_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.todos,
      };
    case type.GET_TODOS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
