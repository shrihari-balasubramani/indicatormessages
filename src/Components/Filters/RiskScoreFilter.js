import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import FilterTemplate from './Filters';

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

const RiskScoreFilter = ({ disabled, scoreRange, onChange }) => (
  <FilterTemplate title='Risk Score'>
    <SliderWrapper>
      <StyledSlider
        disabled={disabled}
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

RiskScoreFilter.propTypes = {
  scoreRange: PropTypes.array,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
export default RiskScoreFilter;
