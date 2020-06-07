import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageCard from './index';
import MessageListCanvas from '../../../.storybook/TestComponents/MessageListCanvas';

const Test = props => (
  <MessageListCanvas>
    <MessageCard />
  </MessageListCanvas>
);

storiesOf('/MessageCard', module).add('Default', () => <Test />);
