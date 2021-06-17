import axios from "axios"
import { Dispatch } from "react"
import { TodosAction, todosActionTypes } from "../../types/todo"

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodosAction>) => {
    try {
      dispatch({ type: todosActionTypes.FETCH_TODOS_START })
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        { params: { _limit: limit, _page: page } }
      )
      setTimeout(() => {
        dispatch({
          type: todosActionTypes.FETCH_TODOS_SUCCESS,
          payload: res.data,
        })
      }, 1000)
    } catch (error) {
      dispatch({
        type: todosActionTypes.FETCH_TODOS_ERROR,
        payload: "Network Error, sorry...",
      })
    }
  }
}
export function setTodoPage(page: number): TodosAction {
  return { type: todosActionTypes.SET_TODOS_PAGE, payload: page }
}
