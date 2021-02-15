import React from 'react';
import styled from 'styled-components';

const VertNav = styled.div`
    text-align: center;
    position: fixed;
    right: 0;
    top:20vh;
`;

const Tab = styled.div`
    display:block;
    transform: ${props => props.current ? 'rotate(0deg)' : 'rotate(90deg)'};
    margin-bottom: ${props => props.current ? '15vh' : '10vh'};
    position:relative;
    text-align:center;
    right: ${props => props.current ? '0' : '-5vh'};
    color: ${props => props.current ? 'black' : 'white'};
    background-color: ${props => props.current ? 'rgba(172, 186, 237, 1)' : 'none'};
    padding:  ${props => props.current ? '1vw 5vw' : 'auto'};

    div {
        width: ${props => props.current ? '0%' : '50%'};
        font-size: ${props => props.current ? '1.5em' : '1em'};
    }

`;
const NavText = styled.div`
    letter-spacing: .1rem;
    text-transform: uppercase;
    position:relative;

    a {
        text-decoration: none;
        color: inherit;

        :hover {
        font-weight: bold;
        }

    }

`;



const NavBar = ({ current }) => {
    console.log(current)
    return (
        <VertNav>
            <Tab current={current === "home"}>
                <NavText > <a href="/">HOME </a></NavText>
            </Tab>
            <Tab current={current === "news"}>
                <NavText>
                    <a  href="/news">NEWS</a>
                </NavText>
            </Tab>
            <Tab  current={current === "opinion"}>
                <NavText >
                    <a href="/opinion">Opinion</a>
                </NavText>
            </Tab>
            <Tab current={current === "eye"}>
                <NavText >
                    <a href="/the-eye"> THE EYE</a>
                </NavText>
            </Tab>
            <Tab current={current === "sports"}>
                <NavText >
                    <a href="/sports"> Sports</a>
                </NavText>
            </Tab>
        </VertNav>
    );
};

export default NavBar;