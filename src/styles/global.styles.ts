import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: ${p => p.theme.background};
  }
`