import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const VertNav = styled.div`
    text-align: right;
    position: fixed;
    right: 1vw;
    top:3vh;
    font-weight:700;
    z-index:100;
`;

const Tab = styled.a`
    display:block;
    margin-bottom: 5vh;
    position:relative;
    text-align:right;
    color: ${props => props.current ? '#1F3B83' : 'white'};
    background-color: ${props => props.current ? '#F4F8D3' : 'none'};
    padding:  ${props => props.current ? '1vw 2vw 1.5vw 2vw' : 'auto'};
    // height:  ${props => props.current ? '1.5rem' : 'auto'};

    width:  ${props => props.current ? '10rem' : 'auto'};
    text-decoration:none;
    div {
        width: ${props => props.current ? '100%' : 'auto'};
        font-size: ${props => props.current ? '1.5em' : '1em'};
    }

    :hover {
        color: #1F3B83;
        background-color:#F4F8D3;
        padding: 1vw 2vw 1.5vw 2vw;
        // height:  ${props => props.current ? '1.5rem' : 'auto'};
        width:  ${props => props.current ? '10rem' : '10rem'};
        div {
            width: 100%;
            font-size: 1.5em;
        }
    }

`;

const NavText = styled.div`
    font-family: 'Fraunces';
    font-weight:700;
    letter-spacing: .1rem;
    text-transform: uppercase;
    position:relative;
    width:100%;
`;


const Logo = styled.div`
    margin-bottom:5vh;
`;
const NavBar = ({ current }) => {
    console.log(current)
    return (
        <VertNav>
            <Logo>
                <a href="https://www.columbiaspectator.com/" style={{
                }}><img style={{
                    height: "38px",
                    width: "36px",
                }} src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/LC75RL476NFG3P677LOBAW2MXE.png"></img></a>
            </Logo>
            <Tab href="/" current={current === "home"}>
                <NavText> HOME </NavText>
            </Tab>
            <Link style={{ textDecoration: 'none' }} to="/uni-news"><Tab current={current === "uni-news"}>
                <NavText>
                    UNIVERSITY NEWS
                </NavText>
            </Tab></Link>
            <Link style={{ textDecoration: 'none' }} to="/spectrum"><Tab current={current === "spectrum"}>
                <NavText>
                    SPECTRUM
                </NavText>
            </Tab></Link>
            <Link style={{ textDecoration: 'none' }} to="/opinion"><Tab current={current === "opinion"}>
                <NavText >
                    Opinion
                </NavText>
            </Tab></Link>
            <Link style={{ textDecoration: 'none' }} to="/sports"><Tab current={current === "sports"}>
                <NavText>
                    Sports
                </NavText>
            </Tab></Link>
            <Link style={{ textDecoration: 'none' }} to="/a&e"><Tab current={current === "a&e"}>
                <NavText >
                    A&E
                </NavText>
            </Tab></Link>
        </VertNav >
    );
};

export default NavBar;