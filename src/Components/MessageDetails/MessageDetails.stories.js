import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageDetails from './index';
import MessageListCanvas from '../../../.storybook/TestComponents/MessageListCanvas';

const dummyData = {
  source: '© test - Event researched by riskmethods',
  created_at: '2020-06-04T10:42:32.361+02:00',
  subject: 'test',
  body_with_rendered_links:
    'test reports that:\r\ntest\r\n... <a target="_blank" rel="noopener noreferrer" id="body-redirect-link" href="https://staging.riskmethods.net/worldmap">read more</a>',
  name: 'Neumark',
  risk_score: {
    available: true,
    value: 100
  },
  indicator_message_type: 'location',
  valid_until: '2020-06-24T23:59:59.000+02:00'
};

const Test = props => (
  <MessageListCanvas fullWidth>
    <MessageDetails {...dummyData} />
  </MessageListCanvas>
);

storiesOf('/MessageDetails', module).add('Default', () => <Test />);
