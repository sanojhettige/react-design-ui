import styled, { css } from "styled-components";

export const SearchFrom = styled.div`
  //   max-width: 520px;
  width: 100%;
  z-index: 1;

  .search-main {
    background: #ffffff;
    display: flex;
    width: 100%;
  }

  .col {
    padding-left: 0px !important;
    padding-right: 0px !important;
    width: 25%;

    .select-container {
      margin-top: 24px;
    }

    button {
      width: 100%;
    }
  }

  button {
    border-radius: 0px 3px 3px 0px;
  }

  .info-title {
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
    margin-top: 10px;
    a {
      color: #000000;
    }
  }
`;
