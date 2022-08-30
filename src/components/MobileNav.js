import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import { fallDown as Menu } from 'react-burger-menu';
import "../index.css";
import { Link } from 'react-router-dom';

const NavWrap = styled.div`
    text-align: center;
    margin: auto;
    padding-top: 0rem;
    height:10vh;
    justify-content: space-between;
    align-items:center;
    display:flex;
    position:sticky;
    top:0;
    left:0;
    flex-wrap: wrap;
    z-index:100;
    background-color:#222066;
    a {
        padding: 0.5rem;
    }
    @media (min-width: 768px) {
       display:none;
    }
`;

const Tab = styled.div`
    background-color:${props => props.current ? "#F4F8D3" : "inherit"};
    color:${props => props.current ? "#1F3B83" : "white"};
    padding: 0.5rem 1rem;
`;
const Logo = styled.div`
    z-index:100;
    position:relative;
    left:5%;
`;
const MobileNavBar = ({ current }) => {
    const [open, setOpen] = React.useState(false);

    function handleClick() {
        console.log(open)
        setOpen(!open)
    }

    return (
        <NavWrap>
            <Logo>
                <a href="https://www.columbiaspectator.com/" style={{
                }}><img style={{
                    height: "40px",
                    width: "40px",
                }} src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/LC75RL476NFG3P677LOBAW2MXE.png"></img></a>
            </Logo>
            <HamburgerMenu
                isOpen={open}
                menuClicked={() => handleClick()}
                width={30}
                height={20}
                strokeWidth={5}
                rotate={0}
                color='white'
                borderRadius={0}
                animationDuration={0.5}
                zIndex={100}
                className="over"
            />
            <Menu isOpen={open} width={'100vw'}>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <Tab current={current === "home"} href="/">Home</Tab></Link>
                <Link style={{ textDecoration: 'none' }} to="/uni-news">
                    <Tab current={current === "uni-news"} href="/uni-news">University News</Tab></Link>
                <Link style={{ textDecoration: 'none' }} to="/spectrum">
                    <Tab current={current === "spectrum"} href="/spectrum">Spectrum</Tab></Link>
                <Link style={{ textDecoration: 'none' }} to="/opinion">
                    <Tab current={current === "opinion"}>Opinion</Tab></Link>
                <Link style={{ textDecoration: 'none' }} to="/sports">
                    <Tab current={current === "sports"}>Sports</Tab>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/a&e">
                    <Tab current={current === "a&e"}>A&E</Tab>
                </Link>
            </Menu>
        </NavWrap>
    );
};

export default MobileNavBar;