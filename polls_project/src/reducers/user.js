import { RECEIVE_USERS } from "../actions/user"
import { ADD_POLL } from "../actions/poll"
import { ADD_ANSWER } from "../actions/answer"

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      }
    case ADD_POLL:
      const poll = action.poll
      const { author, id } = poll

      return {
        ...state,
        [author]: {
          ...state[author],
          polls: state[author].polls.concat([id])
        }
      }
    case ADD_ANSWER:
      const user = state[action.autthedUser]

      return {
        ...state,
        [action.autthedUser]: {
          ...user,
          answers: user.answers.concat([action.id])
        }
      }
    default:
      return state
  }
}