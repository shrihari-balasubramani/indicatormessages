import { getAuthFromCookie } from '../../service/fetchAPI';

export const actionLabels = {
  loginUserStart: 'LOG_IN_START',
  loginUserFail: 'LOG_IN_FAIL',
  loginUserSuccess: 'LOG_IN_SUCCESS'
};
const userInitState = {
  isAuthenticated: !!getAuthFromCookie().length,
  attemptState: 'init'
};

const usersAuthReducer = (state = userInitState, action) => {
  switch (action.type) {
    case actionLabels.loginUserStart:
      return {
        ...state,
        attemptState: 'loading',
        isAuthenticated: false
      };
    case actionLabels.loginUserFail:
      return {
        ...state,
        attemptState: 'loaded',
        isAuthenticated: false
      };
    case actionLabels.loginUserSuccess:
      return {
        ...state,
        attemptState: 'loaded',
        isAuthenticated: true
      };
    default:
      return state;
  }
};

export default usersAuthReducer;
