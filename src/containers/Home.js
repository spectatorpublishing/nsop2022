import React from 'react';
import styled from 'styled-components';

import { device } from '../device';

import Section from './Section';
import CreditsSec from './Credits';
import LetterSec from './LetterEditor';
import NavigationSec from '../components/Navigation'
import NavBar from '../components/NavBar';
import VerticalNav from '../components/VerticalNav';


const CoverWrapper = styled.div`
    background: url(https://cloudfront-us-east-1.images.arcpublishing.com/spectator/UQ4JFQMSONFXJHSBKTCU64BQGQ.png);
    background-size: cover;
    background-position: bottom;
    width:100%;
    height:110vh;
`;

const Wrapper = styled.div`
    padding-left:5%;
    padding-right:5%;
`;

const TextWrapper = styled.div`
    margin: auto;
    padding: 1rem;
    width: fit-content;
    text-align: right;

    @media ${device.laptopS} {
        margin-left: 0;
        background: none;
        padding: 0;
        width: inherit;
    }
`;

const Title = styled.h1`
    color: white;
    letter-spacing: 1rem;
    font-size: 2.5rem;

    @media ${device.tablet} {
        font-size: 3rem;
        letter-spacing: 4.5rem;
    }

    @media ${device.laptopS} {
        font-size: 5rem;
        position: absolute;
        margin-left: 5vw;
        margin-top: 1rem;
        letter-spacing: 6rem;
    }

    @media ${device.laptop} {
        font-size: 7rem;
    }
`;

const MobileNavWrap = styled.div`
        display: inherit;

        @media ${device.laptopS} {
            display: none;
        }
`;

const NavWrap = styled.div`
    display: none;

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
    left:3%;
    color:rgba(172, 186, 237, 1);
    font-style: italic;
`;

const PartOneText = styled.div`
`;

const PartTwoText = styled.div`
    padding-left:3vh;
    padding-top:2vh;
`;
const Home = () => {
    return (

        <Wrapper>

            <NavBar />
            <CoverWrapper id="home">
                <TextWrap>
                    <PartOneText>black history</PartOneText>
                    <PartTwoText>month edition</PartTwoText>
                </TextWrap>
                <NavWrap>
                    <VerticalNav color="white" current="home" />
                </NavWrap>
            </CoverWrapper>

            <LetterSec />
            <NavigationSec first={true} next="news" link="/news" />
            <CreditsSec />
        </Wrapper>

    );
};

export default Home;