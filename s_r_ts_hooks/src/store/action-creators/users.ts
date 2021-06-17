import axios from "axios"
import { Dispatch } from "react"
import { UsersAction, usersActionTypes } from "../../types/user"

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    try {
      dispatch({ type: usersActionTypes.FETCH_USERS_START })
      const res = await axios.get("https://jsonplaceholder.typicode.com/users/")
      setTimeout(() => {
        dispatch({
          type: usersActionTypes.FETCH_USERS_SUCCESS,
          payload: res.data,
        })
      }, 1000)
    } catch (error) {
      dispatch({
        type: usersActionTypes.FETCH_USERS_ERROR,
        payload: "Network Error, sorry...",
      })
    }
  }
}
