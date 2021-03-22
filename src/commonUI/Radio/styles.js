import styled from 'styled-components';

export const RadioContainer = styled.label`
  display: inline-flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 30px;
  border-radius: 4px;
  cursor: pointer;

  ${({ theme }) => `
    border: 1px solid ${theme.colors.gray.three};
  `};
`;

export const RadioIcon = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  transition: 0.3s box-shadow, 0.3s background-color;

  ${({ theme }) => `
    box-shadow: inset 0 0 0 1px ${theme.colors.gray.two};
  `};
`;

export const RadioControl = styled.input`
  opacity: 0;
  position: absolute;
  left: -9999px;

  &:checked ~ ${RadioIcon} {
    ${({ theme }) => `
      box-shadow: inset 0 0 0 1px ${theme.colors.primary.one};
      background-color: ${theme.colors.primary.one};
    `}
  }
`;

export const RadioText = styled.span`
  padding-right: 20px;
  font-weight: 600;
  padding-top: 5px;

  ${({ theme }) => `
    color: ${theme.colors.text.paragraph};
  `}
`;
