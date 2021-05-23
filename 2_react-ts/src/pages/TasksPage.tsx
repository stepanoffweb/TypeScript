import React, { useEffect, useState } from "react"
import { TodoForm } from "../components/TodoForm"
import { TodoList } from "../components/TodoList"
import { ITodo } from "../interfaces"

export default function TasksPage() {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const todosInitial = JSON.parse(
      window.localStorage.getItem("taskList") || "[]"
    ) as ITodo[]
    setTodos(prev => (prev = todosInitial))
  }, [])
  useEffect(() => {
    const todosJson: string = JSON.stringify(todos)
    window.localStorage.setItem("taskList", todosJson)
  }, [todos])

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
    if (window.confirm("Really???")) {
      let newTodos = todos.filter(todo => todo.id !== id)
      setTodos(prev => (prev = newTodos))
    }
  }
  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  )
}
