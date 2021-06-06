import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, NavLink, Route } from "react-router-dom"
import App from "./App"
import TodosPage from "./components/TodosPage"
import UsersPage from "./components/UsersPage"

ReactDOM.render(
  <BrowserRouter>
    <div>
      <NavLink to="/todos" exact>
        Todos
      </NavLink>
      <NavLink to="/users" exact>
        Users
      </NavLink>
    </div>
    <App />
    <Route path="/todos">
      <TodosPage />
    </Route>
    <Route path="/users">
      <UsersPage />
    </Route>
  </BrowserRouter>,
  document.getElementById("root")
)
