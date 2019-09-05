import React, { useState } from 'react';
import styled from "styled-components";
import Elements from './elements';

const Background = styled.div`
    background: ${props => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-left: 30px;
    padding-right: 30px;
`;
const Container = styled.div`
    margin-top: 100px; 
`;
const ToggleContainer = styled.div`
    transition: 0.5s;
    -webkit-transition:3s;
`;
const StyledText = {
    textDecorationLine: "underline",
    fontStyle: "italic"
};


const Component = () => {
    const [toggle, setToggle] = useState(false);
    const toggleHandler = () => {
        setToggle(!toggle);
    };
    return (
        <Background>
            <Container>
                <Elements.Home>margaret gu</Elements.Home>
                <Elements.Description>student @McGillUniversity</Elements.Description>
                <Elements.Description>
                    majoring in <b style={StyledText}>Computer Science</b>
                </Elements.Description>
                <Elements.Description>
                    minoring in <b style={StyledText}>Psychology</b>
                </Elements.Description>
                <Elements.StyledLine />
                <Elements.Link primary onClick={toggleHandler}>notes</Elements.Link>
                {toggle ? (
                    <ToggleContainer>
                        <Elements.Notes>COMP 303</Elements.Notes>
                        <Elements.Notes>COMP 307</Elements.Notes>
                        <Elements.Notes>COMP 330</Elements.Notes>
                        <Elements.Notes>COMP 417</Elements.Notes>
                    </ToggleContainer>) : null}
                <Elements.Link primary>projects</Elements.Link>
                <Elements.Link primary>portfolio</Elements.Link>
                <Elements.StyledLine last />
                <Elements.Link secondary><Elements.A href="">about</Elements.A></Elements.Link>
                <Elements.Link secondary><Elements.A href="mailto:gu.margaret1@gmail.com">contact</Elements.A></Elements.Link>
                <Elements.Link secondary><Elements.A target="_blank" href="https://github.com/margaretgyou">github</Elements.A></Elements.Link>
                <Elements.Credits>made by margaret gu</Elements.Credits>
                {/* <Elements.StyledCircle/> */}
            </Container>
        </Background>
    );
};

export default Component;