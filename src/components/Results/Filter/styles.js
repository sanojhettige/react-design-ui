import styled, { css } from "styled-components";

export const SearchFrom = styled.div`
  width: 100%;
  z-index: 1;
  display: flex;

  .col {
    padding-left: 0px !important;
    padding-right: 0px !important;
    width: auto;
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
  .form-control {
    width: 155px;
  }
  .filter-icons {
    margin: 10px 10px 0px 10px;
    width: 30px;
    i {
      font-size: 2em;
      margin: 10px 0 10px 0;
    }
  }
  .filter-btn {
    width: 80px;
    margin: 20px 0px 0 10px;
    cursor: pointer;
  }
`;

export const SideFilterContainer = styled.div`
  .slideout {
    position: fixed;
    background: #ffffff;
    z-index: 1000 !important;
    color: #fff;
    height: 100%;
    min-height: 100%;
    padding: 1em;
    right: -360px;
    top: 0;
    transition-duration: 0.2s;
    width: 325px;
    overflow-x: hidden;
    height: 100%;

    .close-icon {
      color: #000000;
    }

    .filter-main {
      .header {
        display: flex;
        width: 100%;
        justify-content: center;
        margin-top: 25px;

        .title {
          font-family: FaricyNew-Bold;
          font-size: 25px;
          line-height: 29px;

          color: #000000;
        }
        .icon {
          color: #000000;
          margin: 4px;
        }
      }
      .body {
        .field-row {
          width: 100%;
          padding: 30px 0 0 10px;

          .field-title {
            font-family: FaricyNew-Medium;
            font-size: 18px;
            line-height: 21px;
            color: #00091e;
            padding: 10px 0 10px 0px;
          }
          .field-content {
            div:nth-child(1) {
              width: 100%;
              label {
                width: 100%;
                margin: 5px 0 5px 0;
              }
            }
          }
        }
      }
    }
  }

  .slideout.on {
    right: 0;
  }
`;
