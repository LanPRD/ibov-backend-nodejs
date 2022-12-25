import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px 'Nunito', sans-serif;
  }

  button {
    cursor: pointer;
  }

  html {
    font-size: 10px;
    overflow-y: overlay;
  }

  @media(max-width: 1280px) {
    html {
      font-size: 8.75px;
    }
  }

  @media(max-width: 1080px) {
    html {
      font-size: 7.5px;
    }
  }

  @media(max-width: 800px) {
    html {
      font-size: 6.25px;
    }
  }

  @media(max-width: 400px) {
    html {
      font-size: 5px;
    }
  }
`;
