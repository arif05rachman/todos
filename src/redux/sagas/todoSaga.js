import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import * as type from "../types";

const apiUrl = `https://jsonplaceholder.typicode.com/users`;
const getApi = async () => {
  try {
    const { data } = await axios.get(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

function* fetchTodos(action) {
  try {
    const todos = yield call(getApi);
    yield put({ type: type.GET_TODOS_SUCCESS, todos: todos });
  } catch (e) {
    yield put({ type: type.GET_TODOS_FAILED, message: e.message });
  }
}

function* todoSaga() {
  // yield takeEvery(type.GET_TODOS_REQUESTED, fetchTodos);
  // yield takeEvery(type.ADD_TODO_REQUESTED, );
}

export default todoSaga;
