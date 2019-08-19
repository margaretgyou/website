import styled, { css } from "styled-components";

const Home = styled.div`
    {...${props => props.theme.text.home}}
    margin-bottom: 20px;
`;
const Description = styled.div`
    {...${props => props.theme.text.description}}
    padding: 2px;
    text-align: center;
    flex-flow: row unwrap;
`;
const StyledLine = styled.div` 
    margin: 25px 100px 12px 100px;
    width: 50px;
    border-bottom: 1px solid ${props => props.theme.colors.primary};
    ${props => props.last && css`
        margin-top: 35px;
     `}
`;
const Link = styled.div`
{...${props => props.theme.text.link}}
    padding-top: 23px;
    -webkit-transition:.75s;
    ${props => props.primary && css`
        font-weight: bold;
        &:hover{
            color: ${props => props.theme.colors.orange};
        }
    `},
    ${props => props.secondary && css`
        padding-top: 23px;
        font-weight: normal;
    `}
`;
const Notes = styled.div`
    {...${props => props.theme.text.notes}}
    padding-top: 15px;
    -webkit-transition:.75s;
    font-size: 5px;
       &:hover{
            color: ${props => props.theme.colors.list};
        }
`;
const A = styled.a`
    color: ${props => props.theme.colors.blackPearl};
    text-decoration: inherit;
    &:hover{
        color: ${props => props.theme.colors.orange};
    }
`;

const Credits = styled.div`
    {...${props => props.theme.text.credits}}
    text-align: center;
    position: fixed;
    bottom: 10px;
    right: 10px;
    margin-left: 15%;
`;
export default {
    Home,
    Description,
    StyledLine,
    Link,
    A,
    Credits,
    Notes
};
