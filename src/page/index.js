import React, { useRef, useEffect } from 'react';
import { render } from 'react-dom';
import Scroll from '../scrolling';

import styled from 'styled-components';

const PageContainer = styled.div`
    scroll-behavior: smooth;
    padding-right: 50px;
    margin-top: -50px;
    text-align: left;
    .p{
        {...${props=>props.theme.text.description}}
    }
`;
const Title = styled.div`
    {...${props=>props.theme.text.title}}
    padding-top: 50px;
`;
const Button = styled.button`
    height: 30px;
    width: 100px;
`;
const ProjectContainer = styled.div`

`;
const PortfolioContainer = styled.div``;
const Component = () => {
    const StyledText = {
        // textDecorationLine: "underline",
        fontStyle: "italic",
        color: "#ff502f"
    };
    return (
        <React.Fragment>
            <PageContainer>
                <ProjectContainer >
                <Title id={"projectRef"}>Projects</Title>
                    <p>During the absence of school work, I like to embark on new projects to explore &amp; learn the vast applications of code, designs and UX. 
                        I have a passion for writing <b style={StyledText}>clean code</b> and creating <b style={StyledText}>sleek, intuitive &amp; scalable interfaces</b> that improve the user experience.</p>
                </ProjectContainer>
            </PageContainer>
        </React.Fragment>
    );
};
export default Component;