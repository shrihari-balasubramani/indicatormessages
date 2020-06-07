import indicatorMessages from '../../service/indicatorMessages';
import auth from '../../service/auth';

export const fetchMessageDetails = id => {
  //dispatch(indicatorMessagesStart());
  return dipatch =>
    indicatorMessages
      .getMessageDetails(id)
      .then(response => {
        console.log(response);
        //dispatch(getIndicatorMessageDetails(response.data));
      })
      .catch(error => {
        //dispatch(fetchIndicatorMessageDetailsFailed());
      });
};

export const logMeIn = (username, password) => {
  //dispatch(indicatorMessagesStart());
  console.log('dawda');
  return dipatch =>
    auth
      .login(username, password)
      .then(response => {
        console.log(response);
        //dispatch(getIndicatorMessageDetails(response.data));
      })
      .catch(error => {
        //dispatch(fetchIndicatorMessageDetailsFailed());
      });
};
