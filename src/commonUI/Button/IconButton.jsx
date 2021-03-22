import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import ClearButton from './ClearButton';
import { iconButtonCSS } from './styles';

function IconButton({ name, color, size, css, children, ...otherProps }) {
  return (
    <ClearButton
      color={color}
      size={size}
      css={iconButtonCSS.concat(otherProps.css)}
      {...otherProps}
    >
      <Icon name={name} />
      {children}
    </ClearButton>
  );
}

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  css: PropTypes.array,
  children: PropTypes.node,
};

IconButton.defaultProps = {
  size: 'inherit',
  css: [],
  color: 'inherit',
};

export default IconButton;
