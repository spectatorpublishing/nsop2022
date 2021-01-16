import React from 'react';
import styled from 'styled-components';

import { device } from '../device';


import Section from './Section';
import CreditsSec from './Credits';
import NavBar from '../components/NavBar';
import WelcomeGraphic from '../components/WelcomeGraphic';
import MobileNavBar from '../components/MobileNav';


import { student_life_articles } from '../data/student_life_articles';

const Wrapper1 = styled.div`
    background-image: url(https://backtocampus.s3.amazonaws.com/low_steps.jpg);
    background-size: cover;
    background-position: center;
    height: 100vh;

    @media ${device.tablet} {
        background-image: url(https://backtocampus.s3.amazonaws.com/low_steps.jpg);
        background-size: cover;
        background-position: center;
        height: 100vh;
    }

    @media ${device.laptopS} {
        background: #251282;
        height: fit-content;
    }

    @media ${device.laptop} {
        background: #251282;
        height: fit-content;
    }
`;

const TextWrapper = styled.div`
    margin: auto;
    background: #251282;
    padding: 1rem;
    width: fit-content;

    @media ${device.tablet} {

    }

    @media ${device.laptopS} {
        margin-left: 0;
        background: none;
        padding: 0;
        width: inherit;
    }

    @media ${device.laptop} {

    }
`;

const Welcome = styled.h1`
    color: white;
    letter-spacing: .75rem;
    font-size: 2rem;

    @media ${device.tablet} {
        font-size: 3rem;
        letter-spacing: 4rem;
    }

    @media ${device.laptopS} {
        font-size: 5rem;
        position: absolute;
        margin-left: 5vw;
        margin-top: 1rem;
        letter-spacing: 5rem;
    }

    @media ${device.laptop} {
        font-size: 7rem;
    }
`;

const Back = styled.h1`
    color: white;
    font-size: 2rem;
    letter-spacing: .75rem;

    @media ${device.tablet} {
        font-size: 3rem;
        letter-spacing: 4rem;
    }

    @media ${device.laptopS} {
        font-size: 5rem;
        margin-top: 25rem;
        position: absolute;
        margin-left: 55vw;
        letter-spacing: 5rem;
    }

    @media ${device.laptop} {
        font-size: 7rem;
        margin-top: 30rem;
    }
`;

const MobileNavWrap = styled.div`
        display: inherit;

        @media ${device.laptopS} {
            display: none;
        }
`;

const Home = () => (
    <>
        <Wrapper1 id="home">
            <NavBar />
            <TextWrapper>
                <Welcome>WELCOME</Welcome>
                <Back>BACK</Back>
                <MobileNavWrap>
                    <MobileNavBar color="white" />
                </MobileNavWrap>
            </TextWrapper>
            <WelcomeGraphic />
        </Wrapper1>
        <Section id="student_life" header="STUDENT LIFE" color="#E4DDEE" articles={student_life_articles} />
        <Section id="on_campus" header="ON CAMPUS" color="#FFC0A5" articles={student_life_articles} />
        <Section id="beyond_campus" header="BEYOND CAMPUS" color="#FFECA5" articles={student_life_articles} />
        <Section id="name_tbd" header="NAME TBD" color="#C7D6FF" articles={student_life_articles} />
        <CreditsSec />
    </>
);

export default Home;