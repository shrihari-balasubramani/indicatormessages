import { combineReducers } from 'redux';
import usersAuthReducer from './usersAuth';
import indicatorMessages from './indicatorMessages';
import indicatorMessageDetails from './indicatorMessageDetails';

const rootReducer = combineReducers({
  user: usersAuthReducer,
  messages: indicatorMessages,
  messageDetails: indicatorMessageDetails
});

export default rootReducer;
