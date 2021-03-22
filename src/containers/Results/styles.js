import styled, { css } from "styled-components";

export const ResultContainer = styled.div`
  @media only screen and (max-width: 800px) {
    margin: 0 0 0 0;
  }
  &:before {
    content: "";
    z-index: -1 !important;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 180px;
    left: 0;

    ${({ theme }) => `
    background-color: ${theme.colors.blue.light};
    `};
  }

  .section-main {
    height: 460px;
  }

  .form-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    // margin: 20px 30px 0px 0px;
    border-top: 0.2px solid rgb(137, 158, 163, 0.3);
    border-bottom: 0.2px solid rgb(137, 158, 163, 0.3);
    box-sizing: border-box;
    justify-content: center;
    background: #ffffff;
    height: 100px;
  }
  .result-container {
    .result-header {
      width: 100%;
      display: flex;
      margin-top: 10px;

      .section-one {
        display: flex;
        width: 50%;

        .title {
          font-weight: bold;
          font-size: 25px;
          line-height: 34px;

          color: #000000;
          margin-top: 10px;
          // margin-left: 20px;
        }
      }
      .section-two {
        display: flex;
        width: 50%;
        justify-content: flex-end;
      }
    }
    .course-section {
      width: 100%;
      display: flex;

      .courses {
        width: 100%;
      }

      .advertisments {
        width: 0%;
      }
    }
  }

  @media only screen and (max-width: 800px) {
    .result-container {
      .result-header {
        display: block;

        .section-one,
        .section-two {
          width: 100% !important;
          justify-content: center;
        }
      }
    }
    .form-container {
      display: none;
    }

    .results-page {
      margin-top: 120px;
    }
  }
`;
