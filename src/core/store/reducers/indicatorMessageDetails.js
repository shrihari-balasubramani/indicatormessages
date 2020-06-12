export const actionLabels = {
  callStarted: 'MESSAGE_DETAIL_CALL_START',
  callFailed: 'MESSAGE_DETAIL_CALL_FAIL',
  callSuccess: 'MESSAGE_DETAIL_CALL_SUCCESS'
};
const messageDetailsInitState = {};

const messageDetailsReducer = (state = messageDetailsInitState, action) => {
  switch (action.type) {
    case actionLabels.callStarted:
      return {
        ...state,
        isfetching: true
      };
    case actionLabels.callFailed:
      return {
        ...state,
        isfetching: false
      };
    case actionLabels.callSuccess:
      return {
        ...state,
        isfetching: false,
        ...action.data
      };
    default:
      return state;
  }
};

export default messageDetailsReducer;
