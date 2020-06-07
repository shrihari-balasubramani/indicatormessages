import React from 'react';
import Slider from '@material-ui/core/Slider';
import styled from '@xstyled/styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import { th } from '@xstyled/system';
import { H6, Span } from '../Typography';

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4;
  width: 100%;
`;
const FilterTemplate = ({ title, children }) => (
  <FilterWrapper>
    <H6 mb={2} fontWeight='700'>
      {title}
    </H6>
    {children}
  </FilterWrapper>
);

const StyledSlider = styled(props => (
  <Slider classes={{ colorPrimary: 'colorPrimary' }} {...props} />
))`
  &.colorPrimary {
    color: ${th.color('primary.main')};
  }
`;
const SliderWrapper = styled.div`
  width: 100%;
  padding: 8 4 0;
  box-sizing: border-box;
`;

export const RiskScoreFilter = ({ scoreRange, onChange }) => (
  <FilterTemplate title='Risk Score'>
    <SliderWrapper>
      <StyledSlider
        value={scoreRange}
        onChange={onChange}
        component='div'
        color='primary'
        aria-labelledby='range-slider'
        valueLabelDisplay='on'
      />
    </SliderWrapper>
  </FilterTemplate>
);
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
export const RiskEventsFilter = ({ checked, onChange }) => (
  <FilterTemplate title='Events only'>
    <StyledCheckbox checked={checked} onChange={onChange} color='primary' />
    <Span color='secondary.main' fontSize='0.6rem' fontWeight='600'>
      (Messages with risk score 100 only)
    </Span>
  </FilterTemplate>
);
