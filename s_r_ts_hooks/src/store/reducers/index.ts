import { usersReducer } from "./usersReducer"
import { combineReducers } from "redux"
import { todosReducer } from "./todosReducer"
// import { type } from "os"

export const rootReducer = combineReducers({
  users: usersReducer,
  todos: todosReducer,
})
export type RootReducer = ReturnType<typeof rootReducer>
