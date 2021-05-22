import React, { FC } from "react"
import { ITodo } from "../interfaces"

type TodoListProps = {
  todos: ITodo[]
  onToggle: (id: number) => void // two variants
  onRemove(id: number): void // of the same thing
}

export const TodoList: FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  const changeHadler = (taskId: number) => {
    onToggle(taskId)
  }
  const deleteHandler = (taskId: number) => {
    onRemove(taskId)
  }

  return (
    <ul>
      {todos.map(todo => {
        const classes = ["todo", "lime accent-3"]
        if (todo.completed) {
          classes.push("completed")
        }
        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                onChange={() => changeHadler(todo.id)}
                checked={todo.completed}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={() => deleteHandler(todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}
