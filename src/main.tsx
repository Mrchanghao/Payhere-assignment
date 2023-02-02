import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themes";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "./styles/global.styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <App />
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
