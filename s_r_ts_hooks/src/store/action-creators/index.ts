import * as TodosActionCreators from "./todos"
import * as UsersActionCreators from "./users"

export default {
  ...TodosActionCreators,
  ...UsersActionCreators,
}
