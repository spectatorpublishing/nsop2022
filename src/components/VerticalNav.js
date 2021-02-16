import React from 'react';
import styled from 'styled-components';

const VertNav = styled.div`
    text-align: right;
    position: fixed;
    right: 1vw;
    top:3vh;
    font-weight:700;
`;

const Tab = styled.div`
    display:block;
    margin-bottom: 5vh;
    position:relative;
    text-align:right;
    color: ${props => props.current ? 'black' : 'white'};
    background-color: ${props => props.current ? 'rgba(172, 186, 237, 1)' : 'none'};
    padding:  ${props => props.current ? '1vw 2vw 1vw 7vw' : 'auto'};

    div {
        width: ${props => props.current ? '0%' : 'auto'};
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

const logo = {
    height: "38px",
    width: "36px"
}


const NavBar = ({ current }) => {
    console.log(current)
    return (
        <VertNav>
            <a href="https://www.columbiaspectator.com/"><img style={{
                height: "38px",
                width: "36px",
                marginBottom: "5vh"
            }} src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/LC75RL476NFG3P677LOBAW2MXE.png"></img></a>
            <Tab current={current === "home"}>
                <NavText > <a href="/">HOME </a></NavText>
            </Tab>
            <Tab current={current === "news"}>
                <NavText>
                    <a href="/news">NEWS</a>
                </NavText>
            </Tab>
            <Tab current={current === "opinion"}>
                <NavText >
                    <a href="/opinion">Opinion</a>
                </NavText>
            </Tab>
            <Tab current={current === "sports"}>
                <NavText >
                    <a href="/sports"> Sports</a>
                </NavText>
            </Tab>
            <Tab current={current === "a&e"}>
                <NavText >
                    <a href="/a&e"> A&E</a>
                </NavText>
            </Tab>
            <Tab current={current === "eye"}>
                <NavText >
                    <a href="/the-eye"> THE EYE</a>
                </NavText>
            </Tab>
        </VertNav >
    );
};

export default NavBar;