import React, { FC } from "react"
import { IUser } from "./interfaces/interfaces"
import UserItem from "./UserItem"

interface UsersListProps {
  users: IUser[]
}

const UsersList: FC<UsersListProps> = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  )
}

export default UsersList
