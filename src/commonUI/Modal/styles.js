import styled from 'styled-components';

import IconButton from '../Button/IconButton';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 0;
  justify-content: center;
  align-items: center;

  ${({ theme }) => `
    padding: ${theme.modal.containerPadding};
  `};
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 0;
  position: relative;

  ${({ theme, width, height }) => `
    background-color: ${theme.colors.white};
    box-shadow: ${theme.modal.bodyDropShadow};
    ${width ? `max-width: ${width}` : ''};
    ${height ? `max-height: ${height}` : ''};
  `};
`;

export const ModalContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  flex: 0 auto;
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
  /* 50px is the gap defined in the design */
  transform: translateX(calc(100% + 50px));

  ${({ theme }) => `
    font-size: ${theme.icon.size.xl}px;
    color: ${theme.colors.white};
  `};
`;
