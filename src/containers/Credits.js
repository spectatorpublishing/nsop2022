import React from 'react';
import styled from 'styled-components';

import VerticalNav from '../components/VerticalNav';
import MobileNavBar from '../components/MobileNav';

import { device } from '../device';


const SectionWrap5 = styled.div`
    display: flex;
    background: url(https://backtocampus.s3.amazonaws.com/low_steps.jpg) rgba(37, 18, 130, .45);
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    height: 100vh;
    justify-content: space-between;
    align-content: center;
    align-items: center;
`;

const Credits = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
    height: fit-content;
    width: fit-content;
    margin: auto;
`;

const CreditsText = styled.p`
    color: white;
    font-size: 2rem;
    font-weight: bold;
    padding: 0rem 2rem;

    @media ${device.tablet} {
        padding: 0rem 10rem;
    }
`;

const CreditsButton = styled.button`
    cursor: pointer;
    width: fit-content;
    padding: 1rem 2rem;
    background: transparent;
    border: 3px solid white;
    color: white;
    font-weight: bold;
    font-size: 1.1rem;

    :hover {
        background: white;
        color: #251282;
    }
`;

const MobileNavWrap = styled.div`
    display: inherit;
    margin: auto;

    @media ${device.tablet} {
        display: none;
    }
`;

const NavWrap = styled.div`
    display: none;

    @media ${device.tablet} {
        display: inherit;
        margin-top: -15rem;
    }
`;

const CreditsSec = () => {
    return (
        <SectionWrap5 id="credits">
            <Credits>
                <MobileNavWrap>
                    <MobileNavBar color="white" />
                </MobileNavWrap>
                <CreditsText>
                    THE COLUMBIA DAILY SPECTATOR STAFF WHO MADE THIS ISSUE POSSIBLE
                </CreditsText>
                <a href="/credits">
                    <CreditsButton>
                        CREDITS
                    </CreditsButton>
                </a>
            </Credits>
            <NavWrap>
                <VerticalNav color="white" />
            </NavWrap>
        </SectionWrap5>
    );
};

export default CreditsSec;