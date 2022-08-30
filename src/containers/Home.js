import React from 'react';
import styled from 'styled-components/macro';

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
    background-image: url("https://nsop2022.s3.amazonaws.com/AIDTE6P5SRC55G5C4SPM7GUV54.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index:0;
    margin-top:3rem;
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
        background-size:cover;
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
    position:relative;
    top:5%;
    font-weight:bold;
    color:#F4F8D3;
    margin-left: 1rem;
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
        display: inline-block;
        padding: 0.5em 0.5em 0.5em 1em;
        overflow: hidden;
        color:#F4F8D3;
    }

    @media (min-width: 500px) {
        display: none;
    }
    
    @media (max-width: 500px) {
            div {
                padding: 0rem;
            }
        margin-left: 1rem;
    }
`;

const PartOneText = styled.div`
    text-transform:uppercase;
    font-family: Fraunces;
    text-shadow: 1px 1px #222066;
    font-size: 7.375rem;
    line-height: 7.375rem;
    margin-top: 1rem;
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

    @media (max-width: 768px) {
        font-size:5rem;
        line-height: 5rem;
    }
`;

const PartTwoText = styled.div`
    text-transform:uppercase;
    font-family: Fraunces;
    text-shadow: 2px 2px #222066;
    font-size: 4rem;
    line-height: 4rem;
    margin-bottom: 2rem;
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

    @media (max-width: 768px) {
        font-size: 2rem;
        line-height: 2rem;
        width: auto;
        margin-bottom: 1rem;

    }
`;

const PartTwoTextMobile = styled.div`
    text-transform:uppercase;
    font-family: Fraunces;
    text-shadow: 2px 2px #222066;
    font-size: 4rem;
    line-height: 4rem;
    
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

    @media (max-width: 768px) {
        font-size: 2rem;
        line-height: 2rem;
        margin-bottom: 1rem;
        width: auto;
    }
`;

const Home = () => {
    return (

        <Wrapper>

            <MobileNav current="home" />
            <TextWrapMobile>
                        <PartOneText>nsop 2022</PartOneText>
                        <PartTwoText>special edition</PartTwoText>
            </TextWrapMobile>
            <TitleWrapper>
                    <TextWrap>
                        <PartOneText>nsop 2022</PartOneText>
                        <PartTwoText>special edition</PartTwoText>
                    </TextWrap>
            </TitleWrapper>
            <CoverWrapper id="home">
                <NavWrap>
                    <VerticalNav color="white" current="home" />
                </NavWrap>
            </CoverWrapper>

            <LetterSec />
            <NavigationSec first={true} next="university news" link="/uni-news" />
            <CreditsSec />
        </Wrapper>

    );
};

export default Home;