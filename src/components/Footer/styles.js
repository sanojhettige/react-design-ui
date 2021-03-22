import styled, { css } from "styled-components";

export const FooterContainer = styled.div`
  background: #f0f8fc;
  margin: -50px;

  .footer-block-one {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0px 50px;
    padding-top: 50px;
  }
  .footer-menu {
    display: flex;
    flex-direction: column;
  }
  .menu-title {
    font-size: 19px;
    line-height: 26px;

    display: flex;
    align-items: center;

    color: rgba(0, 9, 30, 0.71);
  }
  .social-title {
    font-size: 19px;
    line-height: 26px;
    display: flex;
    align-items: center;
    text-align: right;
  }
  .footer-social-icons {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .footer-block-two {
    position: relative;
    height: 264px;
  }
  .container-logo {
    margin-left: 50px;
    padding-top: 74px;
  }
  .text-copyright {
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
    color: rgba(0, 9, 30, 0.71);
  }
  .image-footer {
    position: absolute;
    right: 0%;
    bottom: 0%;
  }
  a {
    font-size: 19px;
    line-height: 26px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: rgba(0, 9, 30, 0.71);
  }
`;
