import React from 'react';
import styled from 'styled-components';

import { device } from '../device';

const Nav = styled.div`
    display: flex;
    padding: 1rem;
    padding-bottom: 1rem;
    justify-content: center;

    @media ${device.laptopS} {
        justify-content: flex-end;
        padding-bottom: 0rem;
    }
`;

const NavBar = () => {
    return (
        <Nav>
            <a href="https://www.columbiaspectator.com/" target="_blank">
                <img src="https://backtocampus.s3.amazonaws.com/spec_logo.png" alt="Columbia Daily Spectator Logo" width="220rem" />
            </a>
        </Nav>
    );
};

export default NavBar;