import React from 'react';
import PropTypes from 'prop-types';

import ClearButton from './ClearButton';
import { buttonCSS } from './styles';

function Button({ type, append, prepend, children, css }) {
  return (
    <ClearButton type={type} css={buttonCSS.concat(css)}>
      {prepend}
      <span>{children}</span>
      {append}
    </ClearButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOfType(['primary', 'secondary', 'success', 'error', 'info', 'warning']),
  css: PropTypes.array,
  append: PropTypes.node,
  prepend: PropTypes.node,
};

Button.defaultProps = {
  css: [],
  append: null,
  prepend: null,
  type: 'primary',
};

export default Button;
