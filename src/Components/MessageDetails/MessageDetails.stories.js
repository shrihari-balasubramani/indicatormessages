import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageDetails from './index';
import MessageListCanvas from '../../../.storybook/TestComponents/MessageListCanvas';

const Test = props => (
  <MessageListCanvas fullWidth>
    <MessageDetails />
  </MessageListCanvas>
);

storiesOf('/MessageDetails', module).add('Default', () => <Test />);
