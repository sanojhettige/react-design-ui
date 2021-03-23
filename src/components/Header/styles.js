import styled, { css } from "styled-components";

const Navigation = styled.header`
  font-style: normal;
  width: 99.3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 105px;
  margin: 5px;
  margin-bottom: 20px;

  .logo {
    width: 20%;
  }

  .logo a {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;
    // margin-left: 60px;
  }

  .logo-img-header {
    width: 120px;
    margin: 20px 20px 0px 0px;
  }
  .logo-img-header-mini {
    width: 80px;
    margin: 0px 20px 0px 0px;
  }
  .fa-bars {
    display: none;
    color: #222;
    font-size: 2rem;
  }
  .toggle {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 20px;
    width: 20px;
    z-index: 2;
    color: #fff;
    margin: 0 20px 0px 0px;
  }
  .black {
    color: #000000;
  }
  // Menu Navigation
  nav {
    display: flex !important;
    justify-content: flex-end;
    align-items: center;
    width: 40%;

    .menu {
      list-style-type: none;
    }

    ul {
      display: flex;
      //   justify-content: space-between;
    }
    li {
      display: block;
      transition-duration: 0.5s;
      font-size: 20px;
      line-height: 27px;
      color: #000000;
      margin: 0px 0.7vw !important;
      font-weight: 700;
      text-align: center;
    }

    // li:hover {
    //   cursor: pointer;
    // }

    // ul li ul {
    //   visibility: hidden;
    //   opacity: 0;
    //   position: absolute;
    //   transition: all 0.5s ease;
    //   margin-top: 1rem;
    //   left: 0;
    //   display: none;
    // }

    // ul li:hover > ul,
    // ul li ul:hover {
    //   visibility: visible;
    //   opacity: 1;
    //   display: block;
    // }

    // ul li ul li {
    //   clear: both;
    //   width: 100%;
    // }
    a {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: #222;
    }
    .dropdown {
      display: flex;
      .drop-icon {
        font-size: 1.5em;
        margin: -2px 0px 0px 8px;
      }
    }
  }

  @media (max-width: 480px) {
    nav {
      ul {
        li {
          font-size: 0.9em;
        }
      }
    }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    nav {
      ul {
        li {
          font-size: 0.9em;
        }
      }
    }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    nav {
      ul {
        li {
          font-size: 0.9em;
        }
      }
    }
  }
  @media (min-width: 1025px) and (max-width: 1490px) {
    nav {
      ul {
        li {
          font-size: 0.9em;
        }
      }
    }
  }
  @media (min-width: 1491px) {
    nav {
      ul {
        li {
          font-size: 1em;
        }
      }
    }
  }

  /* Mobile menu */
  .menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .menu li a {
    display: block;
    padding: 15px 5px;
  }
  .menu li.subitem a {
    padding: 15px;
  }
  .submenu {
    background: #ffffff;
    // border-radius: 8px;
    position: absolute;
    // top: 40px;
    // right: 0;
    width: auto;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    z-index: 1;
  }
  .submenu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .submenu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 200px;
    display: block !important;
  }
  .submenu li a {
    text-decoration: none;
    color: #333333;
    padding: 10px 20px;
    display: block;
    text-align: left;

    .icon {
      color: #000000;
    }
  }

  .toggle {
    order: 1;
    font-size: 3em;
  }
  .subitem a {
    padding: 10px 15px;
  }

  /* Tablet menu */
  @media all and (min-width: 800px) {
    .menu {
      justify-content: center;
    }
    .toggle {
      flex: 1;
      text-align: right;
      order: 2;
    }
    /* Button up from tablet screen */
    .menu li.button a {
      padding: 10px 15px;
      margin: 5px 0;
    }
    .button a {
      background: #0080ff;
      border: 1px royalblue solid;
    }
    .button.secondary {
      border: 0;
    }
    .button.secondary a {
      background: transparent;
      border: 1px #0080ff solid;
    }
    .button a:hover {
      text-decoration: none;
    }
    .button:not(.secondary) a:hover {
      background: royalblue;
      border-color: darkblue;
    }
  }
  /* Desktop menu */
  @media all and (min-width: 960px) {
    .menu {
      align-items: flex-start;
      flex-wrap: nowrap;
      background: none;
    }
    .logo {
      order: 0;
    }
    .item {
      order: 1;
      position: relative;
      display: block;
      width: auto;
    }
    .button {
      order: 2;
    }
    .toggle {
      display: none;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
  }
  @media only screen and (max-width: 800px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
      margin: 0px;
      margin-left: -5px;
      a {
        padding: 20px 0px;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    nav {
      margin-top: -160px;
      width: 100%;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;
      background: #000;
      z-index: 1;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;

const UserNavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  width: 5%;
  // margin-left: -50px;

  .image-card-one {
    position: absolute;
    right: 2%;
    bottom: 0%;
  }
  .section-three {
    display: flex;
    flex-direction: column;
    width: 400px;

    .menu-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      .button-section {
        display: flex;

        .icon-bars {
          margin: 0px 5px 0px 0;
        }
      }
    }

    .menu-trigger {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    //   padding: 4px 6px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      border: none;
      vertical-align: middle;
      transition: box-shadow 0.4s ease;
      margin-left: auto; /* Strictly for positioning */

      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.2);
      box-sizing: border-box;
      border-radius: 27px;

      .icon-bars {
        // margin: 5px;
        font-size: 1.5em;
        color: background: rgba(0, 0, 0, 0.5) !important;
      }

      img {
          width: 32px;
          border-radius: 90px;
      }
    }

    .menu-trigger:hover {
      box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    }

    // .menu-trigger span {
    //   font-weight: 700;
    //   vertical-align: middle;
    //   font-size: 14px;
    //   margin: 0 10px;
    // }

    .menu {
      background: #ffffff;
      // border-radius: 8px;
      position: absolute;
      top: 40px;
      right: 0;
      width: auto;
      box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
      opacity: 0;
      visibility: hidden;
      transform: translateY(-20px);
      transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
      z-index: 1;
    }

    .menu.active {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .menu ul {
      list-style: none;
      padding: 0;
      margin: 0;
      width: auto;
    }

    .menu li:nth-child(5) {
      padding-bottom: 10px;
    }

    .menu li:nth-child(6) {
      border-bottom: 1px solid #dddddd;
      border-top: 1px solid #dddddd;
    }

    .menu li a {
      text-decoration: none;
      color: #333333;
      padding: 10px 20px;
      display: block;

      .icon {
        color: #000000;
      }
    }

    .user-menu {
      width: 240px !important;
    }

    .signup-section {
      width: 600px;
    display: flex;
    justify-content: center;
    height: 200px;

      .info-section {
        ${({ theme }) => `
        background-color: ${theme.colors.blue.light};
      `};
        width: 50%;
        padding: 0px 0 0 50px;
        .title {
          font-size: 1.6em;
        }
        h3 {
          font-weight: bold;
font-size: 2em;
// line-height: 61px;

color: #000000;
        }
      }

      .action-section {
        width: 50%;
        ul li {
          padding: 14px 0 12px 0;
          width: auto;
        }
        ul li:nth-child(1) {
          border-bottom: 1px solid #dddddd;
        }
        ul li:nth-child(2) {
          border-bottom: 1px solid #dddddd;
        }
      }
    }
  }

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const ContactContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;
  // margin-right: -80px;

  .section-information {
    .title-main {
      font-weight: bold;
      line-height: 40px;
      width: 50%;
      margin-bottom: 0px;
      // margin-left: 80px;
    }
    .title-contact {
      font-size: 16px;
      width: 25%;
      margin-top: 10px;
      // margin-left: 80px;
      color: #dadada;
    }
  }
  .section-icon {
    font-size: 2em;
    line-height: 40px;
    margin: 16px 0 0 20px;
    color: #dadada;
  }

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

export default Navigation;
export { UserNavigationContainer, ContactContainer };
