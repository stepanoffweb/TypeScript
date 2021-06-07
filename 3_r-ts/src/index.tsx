import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, NavLink, Route } from "react-router-dom"
import App from "./App"
import TodosPage from "./components/TodosPage"
import { UserItemPage } from "./components/UserItemPage"
import UsersPage from "./components/UsersPage"

ReactDOM.render(
  <BrowserRouter>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: 150,
        margin: "20px auto",
        fontSize: 22,
      }}
    >
      <NavLink to="/todos">Todos</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
    <App />
    <Route path="/todos" exact>
      <TodosPage />
    </Route>
    <Route path="/users" exact>
      <UsersPage />
    </Route>
    <Route path="/users/:id">
      <UserItemPage />
    </Route>
  </BrowserRouter>,
  document.getElementById("root")
)
