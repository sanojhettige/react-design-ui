import styled, { css } from "styled-components";

export const PriceContainer = styled.div`
.section-main {
    height: 460px;
  }

  .image-activity {
    position: absolute;
    right: 0px;
    bottom: 280px;
  }
  .image-activity img {
    width: 80%;
  }

  .container-header-comparator {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    margin: 130px 30px 0px 40px;

    button {
        width: 30%;
    text-align: center;
    justify-content: center;
    padding: 10px 0 10px 0px;
    }
  }
  .title-header-comparator {
    font-size: 2.5em;
    font-weight: bold;
    margin: 0px;
  }
  .subtitle-header-comparator {
    font-size: 0.9em;
  }

  .bottom-button button {
    width: 28%;
    text-align: center;
    justify-content: center;
    padding: 10px 0 10px 0px;
  }

  @media only screen and (max-width: 800px) {
    .image-activity img {
      width: 60%;
      float: right;
    }
  }

  @media only screen and (max-width: 800px) {

  }
`;
