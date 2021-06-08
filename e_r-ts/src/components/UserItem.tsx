import React, { FC } from "react"
import { useHistory } from "react-router"
import { IUser } from "./interfaces/interfaces"

interface UserItemProps {
  user: IUser
  handleClick(user: IUser): void
}

const UserItem: FC<UserItemProps> = ({ user, handleClick }) => {
  return (
    <li
      style={{ padding: 10, border: "1px solid #8e8e8e" }}
      onClick={() => handleClick(user)}
    >
      {user.id}. {user.name} live in {user.address.city} on the
      {user.address.street} street
    </li>
  )
}

export default UserItem
