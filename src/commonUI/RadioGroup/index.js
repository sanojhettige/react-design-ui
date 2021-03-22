import React from 'react';
import PropTypes from 'prop-types';

import { GroupContainer } from './styles';

function RadioGroup({ name, children, onChange, ...otherProps }) {
  return (
    <GroupContainer {...otherProps}>
      {React.Children.map(children, radio =>
        React.cloneElement(radio, { name, onClick: onChange })
      )}
    </GroupContainer>
  );
}

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
  onChange: PropTypes.func,
};

export default RadioGroup;
