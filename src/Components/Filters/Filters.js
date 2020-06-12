import React from 'react';
import PropTypes from 'prop-types';
import styled from '@xstyled/styled-components';
import { H6 } from '../Typography';

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

FilterTemplate.propTypes = {
  title: PropTypes.string
};

export default FilterTemplate;
