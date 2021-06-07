import axios from "axios"
import React, { FC, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { IUser } from "./interfaces/interfaces"
import ListItems from "./ListItems"
import UserItem from "./UserItem"

interface UsersPageParams {
  id: string
}

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
const UsersPage: FC = () => {
  const [reqUsers, setReqUsers] = useState<IUser[] | null>(defaultUsers)
  const users = reqUsers || defaultUsers
  const history = useHistory()

  const handleClick = (user: IUser) => {
    // console.log("userId type:", typeof user.id)
    history.push("users/" + user.id)
  }

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
  const renderUser = (user: IUser) => (
    <UserItem handleClick={handleClick} user={user} key={user.id} />
  )

  return (
    <>
      <h2 style={{ marginTop: 45, textAlign: "center" }}>USERS LIST</h2>
      <ListItems items={users} renderItem={renderUser} />
    </>
  )
}

export default UsersPage
