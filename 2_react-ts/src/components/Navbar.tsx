import React, { FC } from "react"
import { NavLink } from "react-router-dom"


export const Navbar: FC = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper teal darken-2 px-1">
          <NavLink to="#!" className="brand-logo">
            React+TS
          </NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down ">
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/">ToDos</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
