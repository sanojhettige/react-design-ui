import styled from 'styled-components';

export const H3 = styled.h3`
  font-weight: bold;
  ${({ mt, mb }) => `
    margin-top: ${mt || 0};
    margin-bottom: ${mb || '40px'};
  `}

  ${({ theme }) => `
    color: ${theme.colors.text.headings};
    font-size: ${theme.fonts.size.h3};
  `}
`;
