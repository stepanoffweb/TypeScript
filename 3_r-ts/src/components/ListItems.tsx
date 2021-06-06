import React from "react"

interface ListItemsProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

export default function ListItems<T>(props: ListItemsProps<T>) {
  return <ul>{props.items.map(item => props.renderItem(item))}</ul>
}
