import React from 'react';
import styled from 'styled-components';

import { device } from '../device';

const Nav = styled.div`
    display: flex;
    padding: 1rem;
    padding-bottom: 2.5rem;
    padding-top: 2.5rem;
    justify-content: center;

    @media ${device.laptopS} {
        justify-content: flex-end;
    }
`;

const Img = styled.img`
    width: 17rem;
`;

const NavBar = () => {
    return (
        <Nav>
            <a href="https://www.columbiaspectator.com/" target="_blank" rel="noreferrer">
                <Img src="https://backtocampus.s3.amazonaws.com/spec_logo.png" alt="Columbia Daily Spectator Logo" />
            </a>
        </Nav>
    );
};

export default NavBar;