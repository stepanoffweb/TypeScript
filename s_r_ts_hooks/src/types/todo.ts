export enum todosActionTypes {
  FETCH_TODOS_START = "todos fetching start",
  FETCH_TODOS_ERROR = "todos fetching error",
  FETCH_TODOS_SUCCESS = "todos fetching success",
  SET_TODOS_PAGE = "set todo page",
}

export interface TodosState {
  loading: boolean
  error: string | null
  todos: any[]
  page: number
  limit: number
}

interface FetchTodosStartAction {
  type: todosActionTypes.FETCH_TODOS_START
}
interface FetchTodosErrorAction {
  type: todosActionTypes.FETCH_TODOS_ERROR
  payload: string
}
interface FetchTodosSuccessAction {
  type: todosActionTypes.FETCH_TODOS_SUCCESS
  payload: any[]
}
interface SetTodosPageAction {
  type: todosActionTypes.SET_TODOS_PAGE
  payload: number
}

export type TodosAction =
  | FetchTodosErrorAction
  | FetchTodosStartAction
  | FetchTodosSuccessAction
  | SetTodosPageAction
