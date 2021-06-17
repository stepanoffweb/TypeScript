import { UsersAction, usersActionTypes, UsersState } from "../../types/user"

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
}
export const usersReducer = (
  state: UsersState = initialState,
  action: UsersAction
): UsersState => {
  switch (action.type) {
    case usersActionTypes.FETCH_USERS_START:
      return { loading: true, error: null, users: [] }
    case usersActionTypes.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload }
    case usersActionTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] }
    default:
      return state
  }
}
