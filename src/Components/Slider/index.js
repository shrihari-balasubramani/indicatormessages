import React from 'react';

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Slider
      value={value}
      onChange={handleChange}
      valueLabelDisplay='auto'
      aria-labelledby='range-slider'
      getAriaValueText={valuetext}
    />
  );
}
