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
    background: url(https://backtocampus.s3.amazonaws.com/low_steps.jpg) rgba(37, 18, 130, .45);
    background-size: cover;
    background-position: center;
    height: 90vh;
    width:95%;

    @media ${device.laptopS} {
        background: #251282;
    }
`;

const Wrapper = styled.div`
    padding-left:3.5%;
    padding-right:3.5%;
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

const Home = () => {
    return (

        <Wrapper>

            <NavBar />
            <CoverWrapper id="home">
                <NavWrap>
                    <VerticalNav color="white" current="home" />
                </NavWrap>
            </CoverWrapper>

            <LetterSec />
            <NavigationSec  first={true} next="news" link="/news" />
            <CreditsSec />
        </Wrapper>

    );
};

export default Home;