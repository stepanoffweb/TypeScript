import axios from "axios"
import React, { useEffect, useState } from "react"
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
  return (
    <div className="wrapper">
      <Card
        keyPressHandler={num => console.log("click " + ++num)}
        width="300px"
        height="250px"
        option={CardOptions.outlined}
      >
        <button>Go</button>
      </Card>
      <UsersList users={reqUsers || defaultUsers} />
    </div>
  )
}
