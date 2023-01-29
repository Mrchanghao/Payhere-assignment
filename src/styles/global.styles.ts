import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, html, body {
  margin: 0;
  padding: 0;
}
html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: ${p => p.theme.background};
    color: #304156;
  }
  ul,li {
    list-style: none;
  }
 
`