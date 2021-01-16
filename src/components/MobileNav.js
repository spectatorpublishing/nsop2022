import React from 'react';
import styled from 'styled-components';

const NavWrap = styled.div`
    width: fit-content;
    text-align: center;
    margin: auto;
    padding-top: 1rem;
`;

const Swirly = styled.svg`

`;

const NavText = styled.text`
    font-weight: 500;
    font-size: .7rem;
    fill: ${props => props.color };
`;

const MobileNavBar = ({color}) => {
    return (
        <NavWrap>
            <Swirly width="336" height="75" viewBox="0 0 336 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <a href="#home">
                        <NavText x="10" y="15" color={color}>HOME</NavText>
                </a>
                <a href="#student_life">
                        <NavText x="50" y="30" color={color}>
                            <tspan x="50" dy="1.2em">STUDENT</tspan> 
                            <tspan x="50" dy="1.2em">LIFE</tspan></NavText>
                </a>
                <a href="#on_campus">
                        <NavText x="125" y="25" color={color}>
                            <tspan x="125" dy="1.2em">ON</tspan> 
                            <tspan x="125" dy="1.2em">CAMPUS</tspan></NavText>
                </a>
                <a href="#beyond_campus">
                        <NavText x="185" y="10" color={color}>
                            <tspan x="185" dy="1.2em">BEYOND</tspan> 
                            <tspan x="185" dy="1.2em">CAMPUS</tspan>
                            </NavText>
                </a>
                <a href="#name_tbd">
                        <NavText x="270" y="0" color={color}>
                            <tspan x="270" dy="1.2em">NAME</tspan> 
                            <tspan x="270" dy="1.2em">TBD</tspan></NavText>
                </a>
                <a href="#credits">
                        <NavText x="285" y="50" color={color}>
                            CREDITS
                        </NavText>
                </a>
                <path d="M331.568 31.726C331.568 31.726 329.44 21.8106 314.884 23.1894C300.328 24.5682 289.747 46.9712 270.767 44.8597C251.786 42.7483 241.58 22.5178 227.066 6.449C212.552 -9.61981 174.621 14.9677 174.621 14.9677" stroke={color} />
                <circle r="4" transform="matrix(-1 0 0 1 332 34)" fill={color} />
                <path d="M3.93457 17.5227C3.93457 17.5227 13.4797 35.1485 28.3185 39.5267C56.6614 47.8895 51.2209 5.58188 82.3115 6.57996C102.227 7.21929 105.78 17.5183 123.919 23.4779C147.722 31.2985 174.622 14.9591 174.622 14.9591" stroke={color} />
                <circle r="4.5" transform="matrix(-1 0 0 1 4.5 16.5)" fill={color} />
            </Swirly>
        </NavWrap>
    );
};

export default MobileNavBar;