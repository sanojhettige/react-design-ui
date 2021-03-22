import React from "react";
import PropTypes from "prop-types";
import Slider from "react-rangeslider";

// To include the default styles
import "react-rangeslider/lib/index.css";
import { RangeSliderContainer } from "./styles";

const RangeSlider = ({ min, max, value, labels, onChange }) => {
  return (
    <RangeSliderContainer>
      <Slider
        min={min}
        max={max}
        value={value}
        labels={labels}
        handleLabel={value}
        onChange={onChange}
      />
    </RangeSliderContainer>
  );
};

export default RangeSlider;

RangeSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  labels: PropTypes.object,
  onChange: PropTypes.func,
};

RangeSlider.defaultProps = {
  min: 0,
  max: 100,
  value: 50,
  labels: {
    0: "0",
    50: "50",
    100: "100",
  },
  onChange: () => {},
};
