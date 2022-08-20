import { hideLoading, showLoading } from "react-redux-loading"
import { savePollAnswer } from "../utils/api"

export const ADD_ANSWER = 'ADD_ANSWER'

export function addAnswer ({ authedUser, id, answer}) {
  return {
    type: ADD_ANSWER,
    authedUser,
    id,
    answer
  }
}

export function handleAddAnswer (answerData) {
  return (dispatch) => {
    dispatch(showLoading())
    savePollAnswer(answerData)
      .then(() => dispatch(answerData))
      .then(() => dispatch(hideLoading()))
  }
}