import React from 'react';
import { th } from '@xstyled/system';
import styled from '@xstyled/styled-components';
import PropTypes from 'prop-types';
import { RiskScoreFilter, RiskEventsFilter } from './Filters';
import Button from '../Button';

const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${th.color('secondary.light')};
  border-radius: 4px;
  width: 100%;
  min-height: 140px;
  position: relative;
  padding: 2;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
`;

const ButtonWrappers = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  ${Button} {
    margin-right: 3;
  }
`;
const SubmitButtons = ({ submitFilter, resetFilter }) => (
  <ButtonWrappers>
    <Button primary onClick={() => submitFilter()}>
      Filter
    </Button>
    <Button onClick={() => resetFilter()}>Reset</Button>
  </ButtonWrappers>
);
SubmitButtons.propTypes = {
  submitFilter: PropTypes.func,
  resetFilter: PropTypes.func
};

const Filters = ({
  minScore = 0,
  maxScore = 100,
  event = false,
  setFilterValue
}) => {
  const [value, setValue] = React.useState([minScore, maxScore]);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const [checked, setChecked] = React.useState(event);
  const handleChecked = e => {
    setChecked(e.target.checked);
  };
  const submitFilter = () => {
    setFilterValue(value[0], value[1], checked);
  };
  const resetFilter = () => {
    setFilterValue(0, 100, false);
    setValue([0, 100]);
    setChecked(false);
  };

  return (
    <Wrapper>
      <RiskScoreFilter
        disabled={checked}
        scoreRange={value}
        onChange={handleChange}
      />
      <RiskEventsFilter checked={checked} onChange={handleChecked} />
      <SubmitButtons submitFilter={submitFilter} resetFilter={resetFilter} />
    </Wrapper>
  );
};
Filters.propTypes = {
  minScore: PropTypes.number,
  maxScore: PropTypes.number,
  event: PropTypes.bool,
  setFilterValue: PropTypes.func
};

export default Filters;
