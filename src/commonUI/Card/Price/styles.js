import styled, { css } from "styled-components";

export const Post = styled.div`
margin: 0 0 0 0;
.card-container {
    min-height: 400px;
}
  .card {
      border-top: 5px solid #F6A09B !important;
box-sizing: border-box;
border-radius: 3px;

    width: 100%;
    .card-header {
        display: block;
        width: 100%;
        .title {
            font-weight: bold;
font-size: 30px;
line-height: 41px;
display: flex;
width: 100%;
justify-content: flex-end;
    margin: 10px 10px 5px -10px;
        }
        .price-symbol {
            display: flex;
            width: 100%;
            justify-content: flex-start;
            margin: 0 10px 0 10px;
        }
        .price {
            font-size: 4em;
// line-height: 136px;
display: flex;
align-items: center;

color: rgba(0, 0, 0, 0.59);
margin: 0 0 0 20px;
        }
    }
    .card-body{
        ul {
        }
        ul li {
            font-size: 16px;
line-height: 22px;
display: flex;
align-items: center;
color: #7D7D7D;
display: flex;
width: 100%;
justify-content: flex-start;
padding: 10px 0 10px 0px;
width: 80%;

i {
    margin: -10px 5px 0 0;
}
        }
    }
    .card-footer {
    }
  }
`;
