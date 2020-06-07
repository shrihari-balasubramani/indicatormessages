import fetchAPI from './fetchAPI';

export default {
  getMessages: (pageNumber, appliedFilter) => {
    const requiredFields = 'source,created_at,subject,name,risk_score';
    const url = process.env.config.indicatorMessages + id;

    // 'filter[risk_score_min]': 0,
    // 'filter[risk_score_max]': 100,
    // 'filter[event]': true

    return fetchAPI.get(url, {
      params: {
        'page[size]': 20,
        'page[number]': pageNumber,
        'fields[indicator_message]': requiredFields,
        filter: appliedFilter
      }
    });
  },
  getMessageDetails: id => {
    const requiredFields = 'source,created_at,subject,body,name,risk_score';
    const url = process.env.config.indicatorMessages + id;

    return fetchAPI.get(url, {
      params: {
        'fields[indicator_message]': requiredFields
      }
    });
  }
};
