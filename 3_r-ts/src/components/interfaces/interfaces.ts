interface IAddress {
  city: string
  zipcode: string
  street: string
}

export interface IUser {
  // key?: number
  id: number
  name: string
  email?: string
  address: IAddress
}

export interface ITodo {
  id: number
  title: string
  completed: boolean
}
