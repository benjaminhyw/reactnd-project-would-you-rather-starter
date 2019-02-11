import { getInitialData } from "../utils/api";
import { setAuthedUser, logout } from "../actions/authedUser";
import { receiveUsers } from "../actions/users";
import { receiveQuestions, handleCreateQuestion } from "../actions/questions";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      // dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}

export function loginUser(authed_id) {
  return dispatch => {
    return dispatch(setAuthedUser(authed_id));
  };
}
export function logoutUser() {
  return dispatch => {
    return dispatch(logout);
  };
}

export function submitNewQuestion(question) {
  return dispatch => {
    return dispatch(handleCreateQuestion(question));
  };
}
