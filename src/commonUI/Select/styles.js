import styled, { css } from "styled-components";

export const Container = styled.div`
  .select-container {
    background: #ffffff;
    padding: 0 10px 0px 10px;
    width: 100%;
  }
  .react-dropdown-select {
    background-color: #fff;
    height: 100%;
    background: #ffffff;
    border: none;
    border-radius: 0px;
    // min-width: 160px;
    min-height: 20px !important;
    height: auto !important;

    .react-dropdown-select-content span {
      font-size: 1em;
      font-weight: bold;
      line-height: 23px;
      color: #000000;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100px;
    }
  }
  .react-dropdown-select.border {
    border: 0.3px solid #ecf2f7;
    border-radius: 3px 0px 0px 3px;
  }

  .react-dropdown-select.xl {
    padding: 28px 25px;

    .react-dropdown-select-content span {
      height: 50px;
      padding: 10px 0px 10px 10px;
      font-size: 1.4em;
      font-weight: bold;
      line-height: 23px;
      color: #000000;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100px;
    }
  }

  .field-label {
    font-size: 12px;
    line-height: 16px;
    color: #000000;
    padding: 0 0px 0px 7px;
  }
  .field-data {
  }
  .react-dropdown-select:hover {
    border-color: none !important;
  }
  .react-dropdown-select:focus-within {
    border-color: none !important;
  }
`;
