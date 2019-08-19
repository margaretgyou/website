import React from 'react';
import styled, { ThemeProvider } from "styled-components";

import Navbar from "./navbar";
import { THEME } from "./theme";


const Wrapper = styled.div`
  width: 100%; 
  height: 100%;
  display: flex;
`;

const Page = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100vh;
  flex: 1 1 auto;
  display: flex;
  background: ${props => props.theme.colors.white};
`;
const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <Wrapper>
        <Navbar />
        <Page>
          <p>hello page container</p>
        </Page>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
