import styled, { css } from "styled-components";

export const Button = styled.button`
  border: 0;
  background: transparent;
  outline: 0;
  cursor: pointer;
  display: inline-flex;

  ${({ color }) => `
    color: ${color};
  `};
`;

export const iconButtonCSS = css`
  ${({ size }) => `
    font-size: ${size};
  `};
`;

export const buttonCSS = css`
  justify-content: space-between;
  align-items: center;
  padding: 28px 25px;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;

  ${({ theme, type }) => `
    background-color: ${theme.colors.actions[type]};
    color: ${theme.colors.white};
  `}
`;

export const LikeButtonContainer = styled.div`
  position: absolute;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  border: 5px solid;
  width: 50px;
  height: 50px;
  line-height: 44px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  // z-index: 2;
  font-size: 2em;
  background: #ffffff;

  .active {
    color: rgba(255, 35, 53, 0.73);
  }
  .inactive {
    color: #cccccc;
  }
`;

export const FavoriteButtonontainer = styled.div`
  position: absolute;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  border: 5px solid;
  width: 50px;
  height: 50px;
  line-height: 44px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  // z-index: 2;
  font-size: 2em;
  background: #ffffff;

  .active {
    color: rgb(253, 197, 13, 0.73);
  }
  .inactive {
    color: #cccccc;
  }
`;
