import React from 'react';
import PropTypes from 'prop-types';
import styled from '@xstyled/styled-components';
import Button from '../Button';

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

export default SubmitButtons;
