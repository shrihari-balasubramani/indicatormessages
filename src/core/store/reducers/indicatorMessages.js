export const actionLabels = {
  callStarted: 'MESSAGES_CALL_START',
  callFailed: 'MESSAGES_CALL_FAIL',
  callSuccess: 'MESSAGES_CALL_SUCCESS',
  setFilters: 'MESSAGES_SET_FILTERS'
};
const messagesInitState = {
  filters: {
    riskScoreMin: 0,
    riskScoreMax: 100,
    event: false
  }
};

const messagesReducer = (state = messagesInitState, action) => {
  switch (action.type) {
    case actionLabels.callStarted:
      return {
        ...state,
        isFetching: true
      };
    case actionLabels.callFailed:
      return {
        ...state,
        isFetching: false
      };
    case actionLabels.callSuccess:
      return {
        ...state,
        isFetching: false,
        messagesInfo: action.data
      };
    case actionLabels.setFilters:
      return {
        ...state,
        filters: action.filter
      };
    default:
      return state;
  }
};

export default messagesReducer;
