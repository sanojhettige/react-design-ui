import styled, { css } from "styled-components";

export const Destination = styled.div`
width: 100%;
margin: 10px;
.destination {
    position: relative;
  }
  .destination > .image {
    display: block;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-duration: 0.5s;
    transition-property: transform, opacity;
  }
  .destination > .image {
    transform: rotateY(0deg);
  }
  .destination {
    position: relative;
    display: inline-block;
    margin-right: 2px;
    margin-bottom: 1em;
    width: 100%;
  }
  .destination > .image {
    display: block;
    color: white;
    width: inherit;
    background-size: cover !important;
    background-position: center !important;
    height: 220px;
    padding: 1em 2em;
    background: #313131;
    border-radius: 6px;
  }
  .destination > .image p {
    font-size: 0.9125rem;
    line-height: 160%;
    color: #999;
  }
  .title {
    text-align: center;
    vertical-align: middle;
    line-height: 130px;
    font-size: 20px;
  }
  
`;
