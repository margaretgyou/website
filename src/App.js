import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";

import Navbar from "./navbar";
import Elements from './navbar/elements';
import Page from "./page";
import { THEME } from "./theme";

const Wrapper = styled.div`
  width: 100%; 
  height: 100%;
  display: flex;
  scroll-behavior: smooth;
  flex-direction: flex-start;
  zoom: 0.8;
  -moz-transform: scale(0.8);
`;
const NavContainer = styled.div`
  position: fixed;
  flex: 1 0 23em;
  width: 300px;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-y: auto;
  transition: 0.5s;
  box-shadow: ${props => props.theme.boxShadow};
  @media (max-width: 1000px) {
    width: 0;
  }
`;
const PageContainer = styled.div`
  margin-left: 300px;
  height: 100%;
  overflow-y: auto;
  position: relative;
  background: white;
  scroll-behavior: smooth;
  flex: 3 3 auto;
  transition: margin-left .5s;
  padding: 50px;
  @media (max-width: 1000px) {
    margin-left: 0;
  }
`;
const StyledCircle = styled.div.attrs(props => ({
  SIZE: 30
}))`
    background-color: white;
    height: ${props => props.SIZE * 2}px;
    width: ${props => props.SIZE}px;
    border-bottom-right-radius: ${props => props.SIZE * 2}px;
    border-top-right-radius: ${props => props.SIZE * 2}px;
    margin-left: -49.5px;
    margin-top: -30px;
    z-index: 10;
    box-shadow: ${props => props.theme.boxShadow};
    position: relative;
    font-size: 25px;
`;
const StyledArrow = styled.div`
  // transform: rotate(90deg);
  cursor: pointer;
  padding: 11px 0px;
  transition: 0.5s;
  @media (max-width: 1000px) {
    transform: rotate(180deg);
    padding: 18px 10px;
  }
`;
const App = () => {
  const [action, setAction] = useState(true);
  const collapse = () => {
    if (action !== true) {
      document.getElementById("mySidebar").style.width = "300px";
      document.getElementById("main").style.marginLeft = "300px";
      document.getElementById("arrow").style.transform = "rotate(0deg)";
      document.getElementById("arrow").style.padding ="11px 0px"
      setAction(true);
    }
    else {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      document.getElementById("arrow").style.transform = "rotate(180deg)";
      document.getElementById("arrow").style.padding = "18px 10px";
      setAction(false);
    }
  }
  return (
    <ThemeProvider theme={THEME}>
      <Wrapper>
        <NavContainer id={"mySidebar"}>
          <Navbar />
        </NavContainer>
        <PageContainer id={"main"}>
          <StyledCircle onClick={collapse}><StyledArrow id={"arrow"}>
          &lt;
          </StyledArrow></StyledCircle>
          <Page />
        </PageContainer>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
