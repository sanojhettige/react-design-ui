import React from 'react';
import PropTypes from 'prop-types';

import { RadioContainer, RadioIcon, RadioControl, RadioText } from './styles';

function Radio({ children, name, value }) {
  return (
    <RadioContainer>
      <RadioControl type="radio" name={name} value={value} />
      <RadioText>{children}</RadioText>
      <RadioIcon />
    </RadioContainer>
  );
}

Radio.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node,
};

export default Radio;
