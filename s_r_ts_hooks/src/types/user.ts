export interface UsersState {
  users: any[]
  loading: boolean
  error: null | string
}

export enum usersActionTypes {
  FETCH_USERS_START = "start fetching users",
  FETCH_USERS_SUCCESS = "success fetching users",
  FETCH_USERS_ERROR = "error fetching users",
}
interface FetchUsersStart {
  type: usersActionTypes.FETCH_USERS_START
}
interface FetchUsersSuccess {
  type: usersActionTypes.FETCH_USERS_SUCCESS
  payload: any[]
}
interface FetchUsersError {
  type: usersActionTypes.FETCH_USERS_ERROR
  payload: string
}
export type UsersAction = FetchUsersStart | FetchUsersError | FetchUsersSuccess
