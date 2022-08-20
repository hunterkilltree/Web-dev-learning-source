import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './user'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
  authedUser,
  users,
  LoadingBar: LoadingBar
})