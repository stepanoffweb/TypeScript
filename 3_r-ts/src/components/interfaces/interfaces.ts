interface IAddress {
  city: string
  zipcode: string
  street: string
}

export interface IUser {
  key?: number
  id: number
  name: string
  email?: string
  address: IAddress
}
