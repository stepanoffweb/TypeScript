import React, { FC, useEffect } from "react"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"

export const TodosList: FC = () => {
  const { page, todos, loading, error, limit } = useTypedSelector(
    state => state.todos
  )
  const { fetchTodos } = useActions()
  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])
  if (loading) {
    return <h1>Data is loading, just wait...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }
  return (
    <ul style={{ fontSize: 28 }}>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.id} - {todo.title}
        </li>
      ))}
    </ul>
  )
}
