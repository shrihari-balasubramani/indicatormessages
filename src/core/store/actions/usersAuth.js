import { actionLabels } from '../reducers/usersAuth';
import auth from '../../service/auth';

const usersAuthActions = {
  loginUserStart: () => ({
    type: actionLabels.loginUserStart
  }),
  loginUserFail: error => ({
    type: actionLabels.loginUserFail
  }),
  loginUserSuccess: () => ({
    type: actionLabels.loginUserSuccess
  })
};

export const logMeIn = (username, password) => dipatch => {
  dipatch(usersAuthActions.loginUserStart());
  auth
    .login(username, password)
    .then(accessToken => {
      setTimeout(() => dipatch(usersAuthActions.loginUserSuccess()), 0);
    })
    .catch(error => {
      dipatch(usersAuthActions.loginUserFail());
    });
};
