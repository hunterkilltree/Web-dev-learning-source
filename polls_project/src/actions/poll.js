import { savePoll } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const ADD_POLL = 'ADD_POLL'
export const RECEIVE_POLLS = 'RECEIVE_POLLS'

function addPoll (poll) {
  return {
    type: ADD_POLL,
    poll
  }
}

export function receivePolls (polls) {
  return {
    type: RECEIVE_POLLS,
    polls
  }
}

export function handleAddPoll (poll) {
  return (dispath, getState) => {
    const { authedUser } = getState()

    dispath(showLoading())

    return savePoll({
      ...poll,
      author: authedUser
    })
    .then((poll) => dispath(addPoll(poll)))
    .then(() => dispath(hideLoading()))
  }
}