import React from 'react';
import { storiesOf } from '@storybook/react';
import Filters from './index';
import MessageListCanvas from '../../../.storybook/TestComponents/MessageListCanvas';

const Test = props => (
  <MessageListCanvas>
    <Filters setFilterValue={() => null} />
  </MessageListCanvas>
);

storiesOf('/Filters', module).add('Default', () => <Test />);
