import React from 'react';
import styled from 'styled-components';

import { device } from '../device';

import CreditsSec from './Credits';
import LetterSec from './LetterEditor';
import NavigationSec from '../components/Navigation'
import VerticalNav from '../components/VerticalNav';
import MobileNav from '../components/MobileNav';

const TitleWrapper = styled.div`
    z-index:1;
`
const CoverWrapper = styled.div`
    background-color:#453F5A;
    background-size: cover;
    background-position: bottom;
    z-index:0;
    margin-top:-10vw;
    width:100%;
    height:110vh;

    @media (max-width: 500px) {
        width:100%;
        height:40vh;
        margin-top:25vw;
        background-size:cover !important;
    }

    @media (max-width: 768px) {
        height:60vh;
    }

    @media (max-width: 1300px) {
        background-size:contain;
        background-repeat:no-repeat;
    }
`;

const Wrapper = styled.div`
    padding-left:7%;
    padding-right:7%;
    overflow-x:hidden;
    @media (max-width: 768px) {
        height:100vh;
        padding-left:0%;
        padding-right:0%;
    }
`;


const NavWrap = styled.div`
    display: none;
    z-index:2;
    @media ${device.tablet} {
        display: inherit;
        margin-top: 0;
    }
`;

const TextWrap = styled.div`
    font-size: 7.375em;
    position:relative;
    top:5%;
    font-weight:bold;
    color:#F4F8D3;
    @media (max-width: 501px) {
        display:none;
    }
    @media (max-width: 768px) {
        font-size:5em;
    }
`;

const TextWrapMobile = styled.div`    
    font-size: 2.5em;
    position:relative;
    height:auto;
    font-weight:900;
    letter-spacing:1px;
    margin-bottom:-2.5em;
    div {
        font-family: Fraunces;
        position: relative;
        font-family: Fraunces;
        width:80%;
        display: inline-block;
        padding: 0.5em 0.5em 0.5em 1em;
        overflow: hidden;
        color:#F4F8D3;
    }
    
    @media (min-width: 500px) {
            display: none;
    }
`;

const PartOneText = styled.div`
    text-transform:uppercase;
    font-family: Fraunces;
    @media (max-width: 500px) {
        left:0%;
        padding:2vw;
        :after {
            content: '';
            position: absolute;
            margin-top:1em;
            top: 0;
            left: 0;
            width: 85%;
            height: 40%;
            background-color:#2B224D;
            transform-origin: 100% 0;
            transform: skew(-10deg);
            z-index: -1;
        }
    }
`;

const PartTwoText = styled.div`
    margin-top:2vh;
    text-transform:uppercase;
    font-family: Fraunces;
    @media (max-width: 500px) {    
        margin-top:0vh;
        padding:2vw;
        :after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform-origin: 0% 100%;
            transform: skew(-10deg);
            z-index: -1;
        }
    }
`;
const Home = () => {
    return (

        <Wrapper>

            <MobileNav current="home" />
            <TextWrapMobile>
                <PartOneText>nsop special edition</PartOneText>
            </TextWrapMobile>
            <TitleWrapper>
                    <TextWrap>
                        <PartOneText>nsop special</PartOneText>
                        <PartTwoText>edition</PartTwoText>
                    </TextWrap>
            </TitleWrapper>
            <CoverWrapper id="home">
                <NavWrap>
                    <VerticalNav color="white" current="home" />
                </NavWrap>
            </CoverWrapper>

            <LetterSec />
            <NavigationSec first={true} next="uni news" link="/uni-news" />
            <CreditsSec />
        </Wrapper>

    );
};

export default Home;