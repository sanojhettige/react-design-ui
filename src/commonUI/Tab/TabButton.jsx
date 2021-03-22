import React from 'react';
import PropTypes from 'prop-types';

import { TabButtonContainer } from './styles';

function TabButton({ className, isSelected, children, onClick }) {
  return (
    <TabButtonContainer className={className} isSelected={isSelected} onClick={onClick}>
      {children}
    </TabButtonContainer>
  );
}

TabButton.propTypes = {
  className: PropTypes.string,
  isSelected: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

TabButton.defaultProps = {
  className: '',
  isSelected: false,
};

export default TabButton;
