import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    body, input, button {
      font: 16px Nunito, sans-serif;
    }

    button {
      cursor: pointer;
    }
  }
`;
