import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

  @font-face {
    font-family: 'nunito';
    src: url('fonts/nunito-bold.eot');
    src: url('fonts/nunito-bold.eot?#iefix') format('embedded-opentype'),
         url('fonts/nunito-bold.woff2') format('woff2'),
         url('fonts/nunito-bold.woff') format('woff'),
         url('fonts/nunito-bold.ttf') format('truetype'),
         url('fonts/nunito-bold.svg#nunitobold') format('svg');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'nunito';
    src: url('fonts/nunito-italic.eot');
    src: url('fonts/nunito-italic.eot?#iefix') format('embedded-opentype'),
        url('fonts/nunito-italic.woff2') format('woff2'),
        url('fonts/nunito-italic.woff') format('woff'),
        url('fonts/nunito-italic.ttf') format('truetype'),
        url('fonts/nunito-italic.svg#nunitoitalic') format('svg');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'nunito';
    src: url('fonts/nunito-regular.eot');
    src: url('fonts/nunito-regular.eot?#iefix') format('embedded-opentype'),
        url('fonts/nunito-regular.woff2') format('woff2'),
        url('fonts/nunito-regular.woff') format('woff'),
        url('fonts/nunito-regular.ttf') format('truetype'),
        url('fonts/nunito-regular.svg#nunitoregular') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'nunito';
    src: url('fonts/nunito-semibold.eot');
    src: url('fonts/nunito-semibold.eot?#iefix') format('embedded-opentype'),
        url('fonts/nunito-semibold.woff2') format('woff2'),
        url('fonts/nunito-semibold.woff') format('woff'),
        url('fonts/nunito-semibold.ttf') format('truetype'),
        url('fonts/nunito-semibold.svg#nunitosemibold') format('svg');
    font-weight: 600;
    font-style: normal;
  }

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  body {
    margin: 0;
    font-family: 'nunito', sans-serif;
    font-size: 15px;
  }

  * {
    box-sizing: border-box;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  hr {
    box-sizing: content-box; 
  }

  pre {
    font-family: monospace, monospace; 
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none; 
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace; 
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; 
    margin: 0; 
  }

  button,
  input { 
    overflow: visible;
  }

  button,
  select { 
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box; 
    max-width: 100%; 
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; 
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield; 
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; 
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
`;
