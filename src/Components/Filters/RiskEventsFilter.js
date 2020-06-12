import React from 'react';
import PropTypes from 'prop-types';
import styled from '@xstyled/styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import { th } from '@xstyled/system';
import { Span } from '../Typography';
import FilterTemplate from './Filters';

const StyledCheckbox = styled(props => (
  <Checkbox
    classes={{ colorPrimary: 'colorPrimary', checked: 'checked' }}
    {...props}
  />
))`
  &.colorPrimary {
    padding: 0;
    justify-content: flex-start;
    width: fit-content;
    &.checked {
      color: ${th.color('primary.main')};
    }
  }
`;
const RiskEventsFilter = ({ checked, onChange }) => (
  <FilterTemplate title='Events only'>
    <StyledCheckbox checked={checked} onChange={onChange} color='primary' />
    <Span color='secondary.main' fontSize='0.6rem' fontWeight='600'>
      (Messages with risk score 100 only)
    </Span>
  </FilterTemplate>
);

RiskEventsFilter.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default RiskEventsFilter;
