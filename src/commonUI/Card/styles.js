import styled, { css } from "styled-components";

export const Card = styled.div`
  .card-container {
    display: flex;
    flex-wrap: wrap;
  }

  .card-container .card {
    border: solid 1px #f2f2f2;
    margin: 5px;
  }

  .card-container .card .card-body {
    padding: 10px;
  }

  .card-container .card img.card-img {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
`;
