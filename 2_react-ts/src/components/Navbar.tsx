import React, { FC } from "react"

export const Navbar: FC = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper teal darken-2 px-1">
          <a href="#!" className="brand-logo">
            React+TS
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down ">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">ToDo</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
