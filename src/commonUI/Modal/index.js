import React from 'react';
import PropTypes from 'prop-types';

import { ModalContainer, ModalBody, ModalContent, CloseButton } from './styles';

function Modal({ width, height, children, isOpen }) {
  return isOpen ? (
    <ModalContainer>
      <ModalBody width={width} height={height}>
        <CloseButton name="close-thick" />
        <ModalContent>{children}</ModalContent>
      </ModalBody>
    </ModalContainer>
  ) : null;
}

Modal.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  isOpen: PropTypes.bool,
};

Modal.defaultProps = {
  isOpen: true,
};

export default Modal;
