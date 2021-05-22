import React, { FC, useState } from "react"

interface ITodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: FC<ITodoFormProps> = props => {
  const [title, setTitle] = useState("")

  const changeHadler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(prev => (prev = e.target.value))
  }

  const keypressHandle = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      props.onAdd(title)
      setTitle("")
    }
  }

  return (
    <div className="section  lime accent-2 mt-1">
      <div className="input-field col s12">
        <input
          // defaultValue="Hello"
          // onFocus="true"
          value={title}
          onChange={changeHadler}
          onKeyPress={keypressHandle}
          type="text"
          id="task"
          placeholder="Моя офигенно важная задача"
        />
        <label htmlFor="task" className="active">
          Введи задачу
        </label>
      </div>
    </div>
  )
}
