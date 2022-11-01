import React from "react";
import CustomRouter from "./router/CustomRouter";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme, mixins } from "./styles/theme";
// import CommonErrorBoundary from "@/components/errorBoundary/CommonErrorBoundary";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={{ ...theme, mixins }}>
        <CustomRouter />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
