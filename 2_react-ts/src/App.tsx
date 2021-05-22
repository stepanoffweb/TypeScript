import React, { useState } from "react"
import { Navbar } from "./components/Navbar"
import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"
import "./index.css"
import { ITodo } from "./interfaces"

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addHandler = (title: string) => {
    const todo = {
      id: Date.now(),
      title: title,
      completed: false,
    }
    setTodos(prev => [todo, ...prev])
  }
  const toggleHandler = (id: number) => {
    let newTodos = todos.map(todo => {
      if (todo.id === id) todo.completed = !todo.completed
      return todo
    })
    setTodos(prev => (prev = newTodos))
  }
  const removeHandler = (id: number) => {
    let newTodos = todos.filter(todo => todo.id !== id)
    setTodos(prev => (prev = newTodos))
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      </div>
    </>
  )
}

export default App
