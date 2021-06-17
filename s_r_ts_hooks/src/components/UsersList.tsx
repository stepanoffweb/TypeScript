import React, { useEffect } from "react"
// import { useDispatch } from "react-redux"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { fetchUsers } from "../store/action-creators/users"

export const UsersList = () => {
  const { error, loading, users } = useTypedSelector(state => state.users)
  //   const dispatch = useDispatch()
  const { fetchUsers } = useActions()

  useEffect(() => {
    // dispatch(fetchUsers())
    fetchUsers()
  }, [])
  if (loading) {
    return <h1>Data is loading, just wait...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <ul style={{ fontSize: 22, display: "flex", flexDirection: "column" }}>
      {users.map(user => (
        <li
          key={`${user.name}-${user.email}`}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          {user.name} | <span> Email: ${user.email} |</span>
          <span>
            Address: city: {user.address.city}, street:{user.address.street}
          </span>
        </li>
      ))}
    </ul>
  )
}
