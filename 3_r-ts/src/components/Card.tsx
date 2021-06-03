import React, { FC, useState } from "react"

export enum CardOptions {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width: string
  height: string
  option?: CardOptions
  keyPressHandler: (num: number) => void
  // children: React.ReactNode | React.ReactChild
}
const Card: FC<CardProps> = ({
  width,
  height,
  children,
  option,
  keyPressHandler,
}) => {
  const [num, setNum] = useState(5)
  return (
    <div
      onClick={() => keyPressHandler(num)}
      style={{
        width,
        height,
        background: option === CardOptions.primary ? "#0aa" : "teal",
        border: option === CardOptions.outlined ? "1px solid red" : "none",
      }}
    >
      {children}
      <p>Всякое</p>
    </div>
  )
}

export default Card
