import React from "react"
import Card, { CardOptions } from "./components/Card"
import UsersList from "./components/UsersList"

const Susers = [
  {
    id: 1,
    name: "Nikolay",
    email: "glock@male.ur",
    address: { city: "Hrenovo", zipcode: "541-536", street: "Vodka Street" },
  },
  {
    id: 1,
    name: "Oxana",
    email: "hule@male.ur",
    address: { city: "Gromovo", zipcode: "890-453", street: "Cognack Avenu" },
  },
]

export default function App() {
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
      <UsersList users={Susers} />
    </div>
  )
}
