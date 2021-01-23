import React from 'react';
import styled from 'styled-components';

import { device } from '../device';

import Section from './Section';
import CreditsSec from './Credits';
import NavBar from '../components/NavBar';
import WelcomeGraphic from '../components/WelcomeGraphic';
import VerticalNav from '../components/VerticalNav';

import { student_life_articles } from '../data/student_life_articles';
import { beyond_campus_articles } from '../data/beyond_campus_articles';
import { on_campus_articles } from '../data/on_campus_articles';
import { resource_articles } from '../data/resource_articles';

const Wrapper1 = styled.div`
    background: url(https://backtocampus.s3.amazonaws.com/low_steps.jpg) rgba(37, 18, 130, .45);
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    height: 150vh;

    @media ${device.laptopS} {
        background: #251282;
        height: fit-content;
    }
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

const Welcome = styled.h1`
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

const Back = styled.h1`
    color: white;
    font-size: 2.5rem;
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

const Explore = styled.h1`
    color: white;
    font-size: .75rem;

    @media ${device.tablet} {
        font-size: 1rem;
    }

    @media ${device.laptopS} {
        font-size: 1rem;
        margin-right: inherit;
        margin-top: 32rem;
        position: absolute;
        margin-left: 72vw;
    }

    @media ${device.laptop} {
        font-size: 1rem;
        margin-top: 39rem;
    }
`;

const MobileNavWrap = styled.div`
        display: inherit;
        margin-top: -10rem;
        float: right;

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
                <Explore>Explore Spectator's Back to Campus Issue</Explore>
                <MobileNavWrap>
                    <VerticalNav color="white" current="home" />
                </MobileNavWrap>
            </TextWrapper>
            <WelcomeGraphic />
        </Wrapper1>
        <Section id="student_life" header="STUDENT LIFE" color="#E4DDEE" articles={student_life_articles} />
        <Section id="on_campus" header="ON CAMPUS" color="#FFC0A5" articles={on_campus_articles} />
        <Section id="beyond_campus" header="BEYOND CAMPUS" color="#FFECA5" articles={beyond_campus_articles} />
        <Section id="resources" header="RESOURCES" color="#C7D6FF" articles={resource_articles} />
        <CreditsSec />
    </>
);

export default Home;