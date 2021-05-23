import React, { FC } from "react"
import { ITodo } from "../interfaces"

type TodoListProps = {
  todos: ITodo[]
  onToggle: (id: number) => void // two variants
  onRemove(id: number): void // of the same thing
}

export const TodoList: FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  const deleteHandler = (e: React.MouseEvent, taskId: number) => {
    e.preventDefault()
    onRemove(taskId)
  }

  return (
    <ul>
      {todos.length === 0 && (
        <h2 className="center" style={{ paddingBottom: "10px" }}>
          Всё сделано !
        </h2>
      )}
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
                onChange={() => onToggle(todo.id)}
                checked={todo.completed}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={e => deleteHandler(e, todo.id)}
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
