import styled, { css } from "styled-components";

export const RangeSliderContainer = styled.div`
  .rangeslider {
    .rangeslider__fill {
      ${({ theme }) => `
      background-color: ${theme.colors.primary.one};
    `};
    }
    .rangeslider__labels {
      .rangeslider__label-item {
        color: #000000;
      }
    }
  }
`;
