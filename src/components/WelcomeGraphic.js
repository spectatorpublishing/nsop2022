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
        padding-bottom: 15rem;
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
`;

const WelcomeGraphic = () => {
    return (
        <ImgWrapper>
            <div>
                <Swirly width="443" height="200" viewBox="0 0 443 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <a href="#home">
                        <NavText x="0" y="50">HOME</NavText>
                    </a>
                    <a href="#student_life">
                        <NavText x="110" y="145">STUDENT LIFE</NavText>
                    </a>
                    <a href="#on_campus">
                        <NavText x="210" y="-10" fill="white">ON CAMPUS</NavText>
                    </a>
                    <circle r="5.5" transform="matrix(-1 0 0 1 6.17 61)" y="500" fill="white"/>
                    <path d="M1 58.6785C1 58.6785 25.6615 121.784 64 137.46C137.229 167.401 123.172 -2.51782 203.5 1.05562C254.955 3.34461 263.608 61.3013 315 64.5308C369.794 67.9741 442 22 442 22" stroke="white"/>
                </Swirly>
                <Illustration src="https://backtocampus.s3.amazonaws.com/low_steps.jpg" alt="Illustration of Low Library at Sunset" />
                <Swirly width="397" height="200" viewBox="0 0 397 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <a href="#beyond_campus">
                        <NavText x="20" y="-10" fill="white">BEYOND CAMPUS</NavText> 
                    </a>
                    <a href="#name_tbd">
                        <NavText x="120" y="145" fill="white">SECTION 4</NavText>  
                    </a>
                    <a href="#credits">
                        <NavText x="325" y="120" fill="white">CREDITS</NavText> 
                    </a>
                    <circle r="5.5" transform="matrix(-1 0 0 1 391.5 100)" y="500" fill="white"/>
                    <path d="M396.5 99.5C396.5 99.5 391 64 353.392 68.9364C315.784 73.8728 288.448 154.082 239.409 146.523C190.369 138.963 181.092 37.9019 141.772 8.45882C102.452 -20.9842 1 50 1 50" stroke="white"/>
                </Swirly>
            </div>
        </ImgWrapper>
    );
};

export default WelcomeGraphic;