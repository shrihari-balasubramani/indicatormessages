import fetchAPI from './fetchAPI';

export default {
  getMessages: (pageNumber = 1, appliedFilter) => {
    const requiredFields = 'source,created_at,subject,name,risk_score,indicator_message_type';
    const url = process.env.config.indicatorMessages;
    const params = {
      'page[size]': 20,
      'page[number]': pageNumber,
      'fields[indicator_message]': requiredFields
    };
    if (!appliedFilter.event) {
      params[`filter[risk_score_min]`] = appliedFilter.riskScoreMin;
      params[`filter[risk_score_max]`] = appliedFilter.riskScoreMax;
    } else {
      params[`filter[event]`] = appliedFilter.event;
    }
    return fetchAPI.get(url, {
      params
    });
  },
  getMessageDetails: id => {
    const requiredFields = 'source,created_at,subject,body_with_rendered_links,name,risk_score,indicator_message_type,valid_until';
    const url = process.env.config.indicatorMessages + id;

    return fetchAPI.get(url, {
      params: {
        'fields[indicator_message]': requiredFields
      }
    });
  }
};
