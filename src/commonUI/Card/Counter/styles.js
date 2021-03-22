import styled, { css } from "styled-components";

export const Counter = styled.div`
  display: flex;
  width: 100%;
  background: #ffffff;
  width: 100%;
  padding: 10px 10px 10px 10px;
  border: 0.2px solid #000000;
  box-sizing: border-box;
  border-radius: 3px;

  .icon {
    font-size: 2.5em;
    margin: -6px 6px 0 0;
  }

  .icon.red {
    ${({ theme }) => `
    color: ${theme.colors.primary.one} !important;
  `};
  }

  .icon.yellow {
    ${({ theme }) => `
    color: ${theme.colors.yellow.one} !important;
  `};
  }

  .title {
    font-weight: bold;
    font-size: 13px;
    line-height: 18px;

    color: #000000;
  }
  .count {
    font-weight: bold;
    font-size: 28px;
    line-height: 38px;

    color: #000000;
  }
`;
