import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './user'

export default combineReducers({
  authedUser,
  users
})