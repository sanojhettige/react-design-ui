import styled, { css } from "styled-components";

export const University = styled.div`
width: 100%;
  .card {
    width: 100%;
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

    .like-button {
      display: flex;
    width: 100%;
    justify-content: flex-end;
    }

    .logo {
      width: 85px;
    margin: 75px 0 0px -20px;
    height: 85px;
    }

    .card-body{

      .country-section {
        display: flex;

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
      .link-button {
        padding: 10px;
        text-align: center;
        background: #FF5866;
        a {
          text-decoration: none;
          font-size: 14px;
line-height: 157%;

text-align: center;
letter-spacing: 0.065em;
text-transform: lowercase;

color: #FFFFFF;
        }
      }
    }
  }
  .title {
    font-weight: bold;
    font-size: 17px;
    line-height: 23px;
    display: flex;
    align-items: center;
    width: 207px;
  }
  .count {
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
  }
`;
