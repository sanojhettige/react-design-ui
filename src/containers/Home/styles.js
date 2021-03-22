import styled, { css } from "styled-components";

export const HomeContainer = styled.div`
  @media only screen and (max-width: 800px) {
    margin: 0 0 0 0;
  }
  &:before {
    content: "";
    z-index: -1 !important;
    position: absolute;
    max-width: 55%;
    width: 100%;
    height: 660px;
    top: 0;
    left: 0;

    ${({ theme }) => `
      background-color: ${theme.colors.blue.light};
    `};
  }

  &:after {
    content: "";
    z-index: -1 !important;
    position: absolute;
    max-width: 80%;
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
  }

  .image-clouds {
    position: absolute;
    right: 0px;
    top: 100px;
  }
  .image-clouds img {
    width: 100%;
  }
  .image-activity {
    position: absolute;
    right: 0px;
    bottom: 220px;
  }
  .image-activity img {
    width: 80%;
  }

  .section-main {
    height: 460px;
  }

  .container-header-comparator {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    margin: 130px 30px 0px 40px;
  }
  .title-header-comparator {
    font-size: 2.5em;
    font-weight: bold;
    margin: 0px;
  }
  .subtitle-header-comparator {
    font-size: 0.9em;
  }
  .form-container{
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    margin: 10px 30px 0px 40px;
  }

  @media only screen and (max-width: 800px) {
    .image-activity img {
      width: 60%;
      float: right;
    }

    .form-container, .container-header-comparator {
      width: 90%;
    }
  }

`;
