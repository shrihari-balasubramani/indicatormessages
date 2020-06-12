import React from 'react';
import PropTypes from 'prop-types';
import Filters from '../../Components/Filters';

const FiltersContainer = ({ filters, setFilters }) => {
  const setFiltersValue = (riskScoreMin, riskScoreMax, event) => setFilters({
    riskScoreMin,
    riskScoreMax,
    event
  });

  return <Filters {...filters} setFilterValue={setFiltersValue} />;
};
FiltersContainer.propTypes = {
  filters: PropTypes.array,
  setFilters: PropTypes.func
};

export default FiltersContainer;
