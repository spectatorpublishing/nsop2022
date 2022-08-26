import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import { fallDown as Menu } from 'react-burger-menu';
import "../index.css";

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
    @media (min-width: 768px) {
       display:none;
    }
`;

const Tab = styled.a`
    background-color:${props => props.current ? "#F4F8D3": "inherit"};
    color:${props => props.current ? "#1F3B83": "white"};
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
                <Tab current={current === "home"} href="/">Home</Tab>
                <Tab current={current === "uni-news"} href="/uni-news">Uni News</Tab>
                <Tab current={current === "city-news"} href="/city-news">City News</Tab>
                <Tab current={current === "opinion"} href="/opinion">Opinion</Tab>
                <Tab current={current === "sports"} href="/sports">Sports</Tab>
                <Tab current={current === "a&e"} href="/a&e">A&E</Tab>
            </Menu>
        </NavWrap>
    );
};

export default MobileNavBar;