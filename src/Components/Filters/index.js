import React from 'react';
import { th } from '@xstyled/system';
import styled from '@xstyled/styled-components';
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
const SubmitButtons = () => (
  <ButtonWrappers>
    <Button primary>Filter</Button>
    <Button>Reset</Button>
  </ButtonWrappers>
);

const Filters = () => {
  const [value, setValue] = React.useState([0, 100]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [checked, setChecked] = React.useState(false);
  const handleChecked = event => {
    setChecked(event.target.checked);
  };
  return (
    <Wrapper>
      <RiskScoreFilter scoreRange={value} onChange={handleChange} />
      <RiskEventsFilter checked={checked} onChange={handleChecked} />
      <SubmitButtons />
    </Wrapper>
  );
};

export default Filters;
