import React, { FC } from "react"
import { UsersList } from "./components/UsersList"
import { TodosList } from "./components/TodosList"

const App: FC = () => {
  return (
    <div>
      <UsersList />
      <hr />
      <TodosList />
    </div>
  )
}
export default App
