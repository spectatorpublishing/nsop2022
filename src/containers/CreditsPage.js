import React from 'react';
import styled from 'styled-components';

import { device } from '../device';

const BackButton = styled.button`
    cursor: pointer;
    width: fit-content;
    padding: 1rem 2rem;
    background: transparent;
    border: 3px solid white;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    margin: 2rem;

    :hover {
        background: white;
        color: #251282;
    }
`;

const Wrapper = styled.div`
    background: #251282;
    height: 100vh;
`;

const Text = styled.div`
    color: white;
    text-align: center;
`;

const CreditsPage = () => (
    <Wrapper>
        <a href="/">
            <BackButton>
                BACK
            </BackButton>
        </a>
        <Text>
            <h1>CREDITS</h1>

            <h2>News</h2>
            <p>Donald Duck</p>

            <h2>Opinion</h2>
            <p>Mickey Mouse</p>

            <h2>Arts and Entertainment</h2>
            <p>Chip</p>
            <p>Dale</p>
        </Text>
    </Wrapper>
);

export default CreditsPage;