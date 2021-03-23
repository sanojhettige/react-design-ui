import styled, { css } from "styled-components";

export const Table1Container = styled.div`
  .table-container {
    display: flex;
    width: 100%;
  }
  .table-body {
    border: 1px solid #EBEBEB;
  }
  .colum-container {
    display: block
  }
  .empty-card{
    height: 354px;
    width: 300px;
  }
  .header-card {
    .card {
      margin: 0px!important;
    }
  }
  .highlighted {
    background: #FCFCFC;
border-bottom: 1px solid #EBEBEB;
box-sizing: border-box;
  }

  .highlighted.value-td {
    font-weight: 800;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: center;

color: rgba(255, 35, 53, 0.73);
  }

  .highlighted.head-td {
    font-weight: bold;
font-size: 15px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;

color: #282D33;
  }

  .value-td, .head-td {
    font-size: 14px;
line-height: 24px;
display: flex;
align-items: center;
text-align: center;
height: 60px;

color: #00091E;
padding: 15px 0 15px 0px
  }

  .value-td {
    justify-content: center;
  }

  .head-td {
    padding-left: 15px;
    display: flex;
    width: 100%;

    span:nth-child(1) {
      width: 90%;
    text-align: left;
    }

    span:nth-child(2){
      width: 10%;
      // margin-top: -10px;
      border: 1px solid #ccc;
    border-radius: 50%;
    width: 23px;
    height: 23px;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
      i {
      }
    }
  }
`;
