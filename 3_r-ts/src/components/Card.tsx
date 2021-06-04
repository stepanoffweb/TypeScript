import React, { FC, useState } from "react"

export enum CardOptions {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width: string
  height: string
  option?: CardOptions
  clickBlockHandler?: (e: React.MouseEvent<HTMLElement>, num: number) => void
  text?: string
  draggable?: boolean
  isDragged?: boolean
  dragHandler?: (e: React.DragEvent<HTMLDivElement>) => void
  dropHandler?: (e: React.DragEvent<HTMLDivElement>) => void
  leaveHandler?: (e: React.DragEvent<HTMLDivElement>) => void
  dragWirthPreventHAndler?: (e: React.DragEvent<HTMLDivElement>) => void
  // children: React.ReactNode | React.ReactChild
}
const Card: FC<CardProps> = ({
  width,
  height,
  children,
  option,
  text,
  clickBlockHandler,
  draggable,
  isDragged,
  dragHandler,
  dropHandler,
  leaveHandler,
  dragWirthPreventHAndler,
}) => {
  const [num, setNum] = useState(5)
  return (
    <div
      onClick={e => clickBlockHandler && clickBlockHandler(e, num)}
      draggable={draggable}
      onDrag={dragHandler}
      onDrop={dropHandler}
      onDragLeave={leaveHandler}
      onDragOver={dragWirthPreventHAndler}
      style={{
        width,
        height,
        background:
          isDragged === true
            ? "red"
            : option === CardOptions.primary
            ? "#05a"
            : "teal",
        border: option === CardOptions.outlined ? "1px solid red" : "none",
        margin: "0 auto",
      }}
    >
      {children}
      <p>{text}</p>
    </div>
  )
}

export default Card
