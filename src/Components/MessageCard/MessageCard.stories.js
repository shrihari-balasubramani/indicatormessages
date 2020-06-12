import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageCard from './index';
import MessageListCanvas from '../../../.storybook/TestComponents/MessageListCanvas';

const dummyData = {
  message: {
    source: '© test - Event researched by riskmethods',
    created_at: '2020-06-04T10:42:32.361+02:00',
    subject: 'test',
    name: 'Neumark',
    risk_score: { available: true, value: 100 },
    indicator_message_type: 'location'
  },
  id: '3673290'
};
const Test = props => (
  <MessageListCanvas>
    <MessageCard {...dummyData} />
  </MessageListCanvas>
);

storiesOf('/MessageCard', module).add('Default', () => <Test />);
