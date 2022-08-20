import { ADD_POLL, RECEIVE_POLLS } from "../actions/poll";
import { ADD_ANSWER } from "../actions/answer";

export default function polls (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls,
      }
    case ADD_POLL:
      return {
        ...state,
        [action.poll.id]: action.poll
      }
    case ADD_ANSWER:
      const { answer, id, authedUser } = action
      const poll = state[id]
      const votesKey = answer + 'Votes'

      return {
        ...state,
        [action.id]: {
          ...poll,
          [votesKey]: poll[votesKey].concat([authedUser])
        }
      }
    default:
      return state
  }
}