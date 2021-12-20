import * as type from "../types";

export function getTodos(todos) {
  return {
    type: type.GET_TODOS_REQUESTED,
    payload: todos,
  };
}

export function getTodo(id) {
  return {
    type: type.GET_TODO_REQUESTED,
    payload: id,
  };
}

export function addTodo(todo) {
  return {
    type: type.ADD_TODO_REQUESTED,
    payload: todo,
  };
}

export function updateTodo(todo) {
  return {
    type: type.UPDATE_TODO_REQUESTED,
    payload: todo,
  };
}

export function removeTodo(id) {
  return {
    type: type.REMOVE_TODO_REQUESTED,
    payload: id,
  };
}
