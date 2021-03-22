import styled, { css } from "styled-components";

export const Post = styled.div`
  .card-body {
    .title {
      font-weight: bold;
      font-size: 23px;
      line-height: 31px;
      display: flex;
      align-items: center;
      color: #00091e;
    }
    .description {
      font-size: 16px;
      line-height: 136%;
      width: 100%;
      display: inline-block;
    }
    img {
      width: 100%;
      max-height: 260px !important;
      border-radius: 3px 3px 0px 0px;
    }
  }
  
`;
