import indicatorMessages from '../../service/indicatorMessages';
import { actionLabels as messageActionLabels } from '../reducers/indicatorMessages';
import { actionLabels } from '../reducers/indicatorMessageDetails';

const messageDetailsActions = {
  callStarted: () => ({
    type: actionLabels.callStarted
  }),
  callFailed: error => ({
    type: actionLabels.callFailed
  }),
  callSuccess: data => ({
    type: actionLabels.callSuccess,
    data: data
  })
};

export const fetchMessageDetails = id => dipatch => {
  dipatch(messageDetailsActions.callStarted());
  indicatorMessages
    .getMessageDetails(id)
    .then(response => {
      dipatch(messageDetailsActions.callSuccess(response.data.data));
    })
    .catch(error => {
      dipatch(messageDetailsActions.callFailed());
    });
};

const messagesActions = {
  callStarted: () => ({
    type: messageActionLabels.callStarted
  }),
  callFailed: error => ({
    type: messageActionLabels.callFailed,
    data: {}
  }),
  callSuccess: responseData => ({
    type: messageActionLabels.callSuccess,
    data: responseData
  }),
  setFilters: filter => ({
    type: messageActionLabels.setFilters,
    filter: filter
  })
};

export const fetchMessages = (pageNumber, appliedFilter) => dipatch => {
  dipatch(messagesActions.callStarted());
  indicatorMessages
    .getMessages(pageNumber, appliedFilter)
    .then(response => {
      dipatch(messagesActions.callSuccess(response.data));
    })
    .catch(error => {
      dipatch(messagesActions.callFailed());
    });
};

export const setFilters = filter => dipatch => {
  dipatch(messagesActions.setFilters(filter));
};
