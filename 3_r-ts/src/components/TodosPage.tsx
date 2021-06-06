import axios from "axios"
import React, { FC, useEffect, useState } from "react"
import { ITodo } from "./interfaces/interfaces"
import ListItems from "./ListItems"
import TodoItem from "./TodoItem"

const defaultTodos = [
  { id: 1, completed: false, title: "Do nothing, but leisure" },
  { id: 2, completed: true, title: "Wake up and smell the coffee!" },
]

const TodosPage: FC = () => {
  const [reqTodos, setReqTodos] = useState<ITodo[]>(defaultTodos)

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    const todos = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=8"
    )
    setReqTodos(todos.data)
  }
  const renderTodo = (todo: ITodo) => <TodoItem todo={todo} key={todo.id} />

  return <ListItems items={reqTodos || defaultTodos} renderItem={renderTodo} />
}

export default TodosPage
