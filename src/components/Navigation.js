import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import '../index.css';

const NavWrap = styled.div`
    height:35vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background:url(https://cloudfront-us-east-1.images.arcpublishing.com/spectator/A5Z2BNPLOBD4NKQUF4CESB6SJQ.png) #6B6BA2;
    background-size: cover;
    background-position: bottom;
`;

const Title = styled.div`
    font-style: normal;
    font-weight:400;
    padding:0vh 0 2vh 0;
`;

const TextWrap = styled.div`
    border: solid 1px white;
    width:70%;
    margin:auto;
    font-family:"Barlow";
    text-transform:uppercase;
    padding-top:7.5vh;
    padding-bottom:7.5vh;
    font-size: 2.5em;
    color:white;
    text-align:center;
`;

const Next = styled.div`
    color:white;
    word-wrap:break-word;
    text-align:center;
    font-weight: 700;

    a {
        text-decoration:none;
        color:white;
        :hover {
            text-decoration:underline;
        }
    }
`;

const NavigationSec = ({ first, next, link }) => {
    console.log(first)
    console.log(next)
    return (
        <NavWrap>
            <TextWrap>
                <Title>{first == true ? "Begin Reading" : "Continue"}</Title>
                <Next>Next: <a href={link}>{next} </a></Next>
            </TextWrap>
        </NavWrap>
    );
};

export default NavigationSec;