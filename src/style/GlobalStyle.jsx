import { createGlobalStyle } from 'styled-components';
import Reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${Reset}

  :root {
    --primary: #B1624E;
    --primary-disabled: #bba29c;
    --secondary: #5CC8D7;
    --background: #a7c3c7;

    --border-radius: 8px;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-size: 62.5%;
    background-color: var(--background);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    padding: 0;
    border: none;
    color: inherit;
    background-color: transparent;
    cursor: pointer; 

    &:disabled {
      cursor: default;
    }
  }

  input {
    border: none;
  }

  #root {
    padding: 80px 0;
  }

  .screen-out {
    position:  absolute;
    width: 1px;
    height: 1px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    clip-path: inset(50%);
  }
`;

export default GlobalStyle;
