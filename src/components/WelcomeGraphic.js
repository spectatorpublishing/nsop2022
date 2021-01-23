import React from 'react';
import styled from 'styled-components';

import { device } from '../device';

const ImgWrapper = styled.div`
    display: none;

    @media ${device.laptopS} {
        display: flex;
        justify-content: center;
    }
`;

const Swirly = styled.svg`
    @media ${device.laptopS} {
        padding-bottom: 5rem;
    }

    @media ${device.laptop} {
        padding-bottom: 20rem;
    }
`;

const Illustration = styled.img`
    @media ${device.laptopS} {
        width: 18rem;
        display: inline;
    }

    @media ${device.laptop} {
        width: 27rem;
    }
`;

const NavText = styled.text`
    font-weight: 500;
    fill: white;
    letter-spacing: .15rem;

    :hover {
        font-weight: bold;
    }
`;

const WelcomeGraphic = () => {
    return (
        <ImgWrapper>
            <div>
                <Swirly width="500" height="210" viewBox="-52 -50 500 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <a href="/#home">
                        <NavText x="-20" y="40">HOME</NavText>
                    </a>
                    <a href="/#student_life">
                        <NavText x="110" y="145">STUDENT LIFE</NavText>
                    </a>
                    <a href="/#on_campus">
                        <NavText x="210" y="-10" fill="white">ON CAMPUS</NavText>
                    </a>
                    <path d="M6 58.6785C6 58.6785 30.6615 121.784 69 137.46C142.229 167.401 128.172 -2.51782 208.5 1.05562C259.955 3.34461 268.608 61.3013 320 64.5308C374.794 67.9741 447 22 447 22" stroke="white"/>
                    <circle r="5.5" transform="matrix(-1 0 0 1 5.5 57.5)" fill="white"/>
                </Swirly>
                <Illustration src="https://backtocampus.s3.amazonaws.com/low_steps.jpg" alt="Illustration of Low Library at Sunset" />
                <Swirly width="433" height="300" viewBox="0 -30 433 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <a href="/#beyond_campus">
                        <NavText x="20" y="-10" fill="white">BEYOND CAMPUS</NavText> 
                    </a>
                    <a href="/#resources">
                        <NavText x="110" y="160" fill="white">RESOURCES</NavText>  
                    </a>
                    <a href="/#credits">
                        <NavText x="350" y="125" fill="white">CREDITS</NavText> 
                    </a>
                    <path d="M396.5 99.5C396.5 99.5 391 64 353.392 68.9364C315.784 73.8728 288.448 154.082 239.409 146.523C190.369 138.963 181.092 37.9019 141.772 8.45882C102.452 -20.9842 1 50 1 50" stroke="white"/>
                    <ellipse rx="5.5" ry="5.3597" transform="matrix(-1 0 0 1 397.5 101.36)" fill="white"/>
                </Swirly>
            </div>
        </ImgWrapper>
    );
};

export default WelcomeGraphic;