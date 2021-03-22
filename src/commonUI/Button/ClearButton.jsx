import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

function ClearButton({ className, type, children, onClick, ...otherProps }) {
  return (
    <Button className={className} type={type} onClick={onClick} {...otherProps}>
      {children}
    </Button>
  );
}

ClearButton.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  css: PropTypes.array,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

ClearButton.defaultProps = {
  className: '',
  type: 'button',
  onClick: () => {},
};

export default ClearButton;
