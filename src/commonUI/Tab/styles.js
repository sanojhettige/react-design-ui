import styled from 'styled-components';

import ClearButton from '../Button/ClearButton';

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;
`;

export const TabButtonsContainer = styled.div`
  display: flex;
  justify-content: stretch;

  ${({ theme }) => `
    border-bottom: 5px solid ${theme.colors.gray.one};
  `};
`;

export const TabButtonContainer = styled(ClearButton)`
  display: inline-flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 5px;

  &:after {
    content: '';
    height: 5px;
    position: absolute;
    bottom: -5px;
    left: 0;
    transition: 0.3s width;

    ${({ theme, isSelected }) => `
      background-color: ${theme.colors.primary.one};
      width: ${isSelected ? '100%' : 0};
    `};
  }
`;
