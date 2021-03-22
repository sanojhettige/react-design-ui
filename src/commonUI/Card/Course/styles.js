import styled, { css } from "styled-components";

export const Post = styled.div`
  .card {
    width: 100%;
    background: #ffffff !important;
    .image {
      display: block;
      color: white;
      width: inherit;
      background-size: cover !important;
      background-position: center !important;
      height: 220px;
      padding: 1em 2em;
      background: #313131;
      border-radius: 3px 3px 0px 0px;
      max-height: 160px !important;
    }

    .logo {
      width: 85px;
      margin: 75px 0 0px -20px;
      height: 85px;
    }

    .buttons {
      display: flex;
      width: 100%;
      justify-content: flex-end;

      .favorite {
        width: 25%;
      }

      .like {
        width: 15%;
      }
    }

    .card-body {
      .title {
        font-weight: bold;
        font-size: 17px;
        line-height: 23px;
        display: flex;
        align-items: center;
      }
      .uni-name {
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        display: flex;
        align-items: center;

        color: rgba(255, 35, 53, 0.73);
      }

      .course-type {
        font-weight: bold;
        font-size: 10px;
        line-height: 14px;
        display: flex;
        align-items: center;
      }

      .country-section {
        display: flex;
        margin-top: 10px;

        .flag {
          font-size: 1.5em;
          width: 12%;
        }

        span {
          font-size: 17px;
          line-height: 23px;

          display: flex;
          align-items: center;

          color: rgba(0, 0, 0, 0.59);
        }
      }
    }
    .card-footer {
      width: 100%;
      .other-tags {
        background: #ffffff;
        border: 0.3px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        padding: 10px;

        display: flex;
        width: 100%;
        .period,
        .category,
        .course-type {
          width: 33.33%;
          justify-content: center;
          text-align: center;
        }

        span:nth-child(2) {
          border-right: 1px solid #cccccc;
          border-left: 1px solid #cccccc;
        }
      }

      .footer-bottom {
        display: flex;
        width: 100%;
        padding: 20px;

        .start_date {
          width: 50%;
          text-align: center;
          font-weight: 800;
          font-size: 14px;
          line-height: 19px;
          display: grid;
          color: rgba(0, 0, 0, 0.59);
        }

        .price {
          width: 50%;
          text-align: center;
          font-weight: 800;
          border-left: 1px solid #cccccc;
          font-size: 14px;
          line-height: 19px;
          display: grid;
          color: rgba(255, 35, 53, 0.73);
        }

        .sub-title {
          font-size: 12px;
          line-height: 16px;
          text-align: center;
          // display: flex;
          // align-items: center;

          color: rgba(0, 0, 0, 0.59);
        }
      }
    }
  }
`;
