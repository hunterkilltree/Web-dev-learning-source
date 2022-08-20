import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './user'
import { loadingBarReducer } from 'react-redux-loading'
import polls from './poll'

export default combineReducers({
  authedUser,
  users,
  polls,
  loadingBar: loadingBarReducer
})