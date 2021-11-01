import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";

import GlobalStyles from "./global-styles";

const BaseTheme = {
  color: "#222",
  background: "#fff",
};

const DarkTheme = {
  color: "#fff",
  background: "#222",
};

const Container = styled.div`
  padding: 2rem;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};
`;

function App() {
  const [baseTheme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!baseTheme);
  };

  return (
    <ThemeProvider theme={baseTheme ? BaseTheme : DarkTheme}>
      <GlobalStyles />
      <Container>
        <h1>hello world</h1>
        <button className="btn" onClick={toggleTheme}>
          toggle me
        </button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
