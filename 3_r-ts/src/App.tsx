import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import Card, { CardOptions } from "./components/Card"
import { IUser } from "./components/interfaces/interfaces"
import UsersList from "./components/UsersList"

const defaultUsers = [
  {
    id: 1,
    name: "Nikolay",
    email: "glock@male.ur",
    address: { city: "Hrenovo", zipcode: "541-536", street: "Vodka Street" },
  },
  {
    id: 2,
    name: "Oxana",
    email: "hule@male.ur",
    address: { city: "Gromovo", zipcode: "890-453", street: "Cognack Avenu" },
  },
]

export default function App() {
  const [reqUsers, setReqUsers] = useState<IUser[]>(defaultUsers)
  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const req = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      )
      setReqUsers(req.data)
    } catch (error) {
      alert(error)
    }
  }
  const [value, setValue] = useState<string>("")
  const [isDragged, setIsDragged] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)
  const clickBlockHandler = (e: React.MouseEvent<HTMLElement>, num: number) =>
    console.log("click " + e.target + ++num) // sorry, but only for sake of mastering skills...

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    // console.log("DRAGGED", e.target + "is almost dragged " + isDragged)
  }
  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragged(isDragged => (isDragged = false))
    console.log("NOT DRAGGED", e.target + "is NOT dragged " + isDragged)
  }
  const dragWirthPreventHAndler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragged(isDragged => (isDragged = true))
    console.log("DRAGGED", e.target + "is dragged " + isDragged)
  }
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragged(isDragged => (isDragged = false))
    console.log("DROPPED", e.target + "is dropped " + isDragged)
  }
  const handleBtnClick = () => {
    alert((inputRef.current && inputRef.current.value) || "Empty") // inputRef.current?.value
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <Card
          width="300px"
          height="250px"
          option={CardOptions.outlined}
          text={value || "Nothing for You, sorry..."}
          clickBlockHandler={clickBlockHandler}
          draggable
          dragHandler={dragHandler}
        >
          <input
            type="text"
            defaultValue="Let's go boozing!!!"
            // onFocus={true}
            placeholder="Input your thoughts"
            onChange={e => changeHandler(e)}
            ref={inputRef}
          />
          <button style={{ marginLeft: 15 }} onClick={handleBtnClick}>
            Go
          </button>
        </Card>
        <Card
          width="300px"
          height="250px"
          option={CardOptions.primary}
          leaveHandler={leaveHandler}
          dropHandler={dropHandler}
          dragWirthPreventHAndler={dragWirthPreventHAndler}
          isDragged={isDragged}
        />
      </div>
      <UsersList users={reqUsers || defaultUsers} />
    </>
  )
}
