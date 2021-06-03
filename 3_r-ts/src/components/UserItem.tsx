import React, { FC } from "react"
import { IUser } from "./interfaces/interfaces"

interface UserItemProps {
  user: IUser
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <li style={{ padding: 10, border: "1px solid #8e8e8e" }}>
      {user.id}. {user.name} live in {user.address.city} on the
      {user.address.street} street
    </li>
  )
}

export default UserItem
