import React from 'react';
import styled from 'styled-components';

import MobileNavBar from '../components/MobileNav';


const SectionWrap5 = styled.div`
    display: flex;
    background-image: url(https://backtocampus.s3.amazonaws.com/low_steps.jpg);
    background-size: cover;
    background-position: center;
    height: 100vh;
    justify-content: center;
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
    width: 30rem;
    padding: 3rem;
    background: #251282;
`;

const CreditsText = styled.p`
    color: white;
    font-size: 2rem;
    font-weight: bold;
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
`;

const CreditsSec = () => {
    return (
        <SectionWrap5 id="credits">
            <Credits>
                <MobileNavBar color="white" />
                <CreditsText>
                    THE COLUMBIA DAILY SPECTATOR STAFF WHO MADE THIS ISSUE POSSIBLE
                </CreditsText>
                <CreditsButton>
                    CREDITS
                </CreditsButton>
            </Credits>
        </SectionWrap5>
    );
};

export default CreditsSec;