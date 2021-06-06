import React, { FC } from "react"
import { ITodo } from "./interfaces/interfaces"

interface TodoItemProps {
  todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <li style={{ padding: 10, border: "1px solid #8e8e8e" }}>
      <input type="checkbox" checked={todo.completed} />
      {todo.id}. {todo.title}
    </li>
  )
}

export default TodoItem
