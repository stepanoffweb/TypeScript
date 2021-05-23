import React from "react"
import { Route, Switch } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import AboutPage from "./pages/AboutPage"
import TasksPage from "./pages/TasksPage"
import "./index.css"

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container lime accent-1">
          <Switch>
            <Route component={AboutPage} path="/about" />
            <Route component={TasksPage} path="/" exact />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
