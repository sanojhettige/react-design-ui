import styled, { css } from "styled-components";

export const SearchResultContainer = styled.div`
.slideout {
    position: fixed;
    background: #ffffff;
    z-index: 1000 !important;
    height: 100%;
    min-height: 100%;
    padding: 1em;
    top: 0;
    transition-duration: 0.2s;
    width: 100%;
    overflow-x: hidden;
    height: 100%;

    .icon-close {
        float: right !important;
        margin-right: 10px;
        margin-top: 35px;
        font-size: 1.6em;
    }

    .filter-main {
      .header {
        display: block;
    width: 100%;
    text-align: center;
        margin-top: 25px;

        .title {
          font-family: FaricyNew-Bold;
          font-size: 25px;
          line-height: 29px;

          color: #000000;
        }
        .sub-title {
            font-size: 20px;
line-height: 27px;
text-align: center;

color: #000000;
        }
        .icon {
          color: #000000;
          margin: 4px;
          font-size: 2em;
        }
      }
      .body {
        
      }
    }
  }

  .slideout.on {
    right: 0;
  }

  @media only screen and (max-width: 800px) {
    margin: 0 0 0 0;
  }

  @media only screen and (max-width: 800px) {

  }
`;



export const TableResultContainer = styled.div``;