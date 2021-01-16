import React from 'react';
import styled from 'styled-components';

const Wrapper1 = styled.div`
  background: #251282;  
`;

const Wrapper2 = styled.div`
    background: #E4DDEE;
    text-align: center;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Nav = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    padding-bottom: 0rem;
`;

const Welcome = styled.h1`
    position: absolute;
    margin-left: 5vw;
    margin-top: 1rem;
    font-size: 7rem;
    letter-spacing: 5rem;
    color: white;
`;

const Back = styled.h1`
    position: absolute;
    margin-left: 55vw;
    margin-top: 30rem;
    font-size: 7rem;
    letter-spacing: 5rem;
    color: white;
`;

const Header = styled.h1`
    margin: 0rem;
    font-size: 3rem;
    letter-spacing: 2rem;
    color: #251282;
    padding-top: 2rem;
`;

const Swirly = styled.svg`
    padding-bottom: 20rem;
`;

const NavText = styled.text`
    font-weight: 500;
    fill: white;
`;

const Orientation = () => (
    <>
        <Wrapper1>
            <Nav>
                <a href="https://www.columbiaspectator.com/" target="_blank">
                    <img src="https://backtocampus.s3.amazonaws.com/spec_logo.png" alt="Columbia Daily Spectator Logo" width="220rem" />
                </a>
            </Nav>
            <Welcome>WELCOME</Welcome>
            <Back>BACK</Back>
            <ImgWrapper>
                <div>
                    <Swirly width="443" height="200" viewBox="0 0 443 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <a href="https://www.w3schools.com/graphics/" target="_blank">
                            <NavText x="0" y="50">HOME</NavText>
                        </a>
                        <a href="https://www.w3schools.com/graphics/" target="_blank">
                            <NavText x="110" y="145">STUDENT LIFE</NavText>
                        </a>
                        <a href="https://www.w3schools.com/graphics/" target="_blank">
                            <NavText x="210" y="-10" fill="white">ON CAMPUS</NavText>
                        </a>
                        <circle r="5.5" transform="matrix(-1 0 0 1 6.17 61)" y="500" fill="white"/>
                        <path d="M1 58.6785C1 58.6785 25.6615 121.784 64 137.46C137.229 167.401 123.172 -2.51782 203.5 1.05562C254.955 3.34461 263.608 61.3013 315 64.5308C369.794 67.9741 442 22 442 22" stroke="white"/>
                    </Swirly>
                    <img src="https://backtocampus.s3.amazonaws.com/main_illustration.jpg" alt="Illustration of Low Library at Sunset" width="425rem" />
                    <Swirly width="397" height="200" viewBox="0 0 397 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <a href="https://www.w3schools.com/graphics/" target="_blank">
                            <NavText x="20" y="-10" fill="white">BEYOND CAMPUS</NavText> 
                        </a>
                        <a href="https://www.w3schools.com/graphics/" target="_blank">
                            <NavText x="120" y="145" fill="white">SECTION 4</NavText>  
                        </a>
                        <a href="https://www.w3schools.com/graphics/" target="_blank">
                            <NavText x="325" y="120" fill="white">CREDITS</NavText> 
                        </a>
                        <circle r="5.5" transform="matrix(-1 0 0 1 391.5 100)" y="500" fill="white"/>
                        <path d="M396.5 99.5C396.5 99.5 391 64 353.392 68.9364C315.784 73.8728 288.448 154.082 239.409 146.523C190.369 138.963 181.092 37.9019 141.772 8.45882C102.452 -20.9842 1 50 1 50" stroke="white"/>
                    </Swirly>
                </div>
            </ImgWrapper>
        </Wrapper1>
        <Wrapper2>
            <Header>STUDENT LIFE</Header> 
        </Wrapper2>
    </>
);

export default Orientation;
