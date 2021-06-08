import axios from "axios"
import React, { FC, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { IUser } from "./interfaces/interfaces"

interface UserItemParams {
  id: string
}

export const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const { id } = useParams<UserItemParams>()
  const history = useHistory()

  useEffect(() => {
    fetchUserItem()
  }, [])

  async function fetchUserItem() {
    try {
      const res = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + id
      )
      setUser(res.data)
    } catch (e) {
      alert(e)
    }
  }
  const handleClick = () => {
    history.push("/users")
  }

  return (
    <div style={{}}>
      <h1 style={{ textAlign: "center" }}>
        The page of : <i>{user?.name}</i>{" "}
      </h1>
      <button
        onClick={handleClick}
        style={{
          width: 280,
          height: 50,
          fontSize: 22,
          display: "block",
          margin: "0 auto",
          backgroundColor: "#5fff6f",
        }}
      >
        BackToUsersPage
      </button>

      <div style={{ fontSize: 26 }}>
        <p style={{ padding: 55 }}>
          <b>From:</b> {user?.address.city}, {user?.address.street}. <br />
          <b>ZipCode:</b> &nbsp; {user?.address.zipcode} <br />
          <b>Email:</b> &nbsp;{user?.email}
          <b>Phone:</b> &nbsp;{user?.phone}
          <b>Website:</b> &nbsp;{user?.website}
          <b>Company:</b> &nbsp;{user?.company?.name || "Unknown"}
          <b>Company's catchPhrase:</b> &nbsp;
          {user?.company?.catchPhrase || "Unknown"}
        </p>
      </div>
    </div>
  )
}
