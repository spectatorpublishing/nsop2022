import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import '../index.css';

const LetterWrap = styled.div`
    height:50vh;
    background-color:red;
`;

const Title = styled.div`
    font-style: normal;
    font-weight: 900;
    font-size: 6em;
    text-align:center;
    letter-spacing: 0.05em;
    color:rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px white;
    
    padding:2vh 0 2vh 0;
    word-wrap:break-word;
`;

const Credits = styled.div`
    font-style: normal;
    font-weight: 900;
    font-size: 4em;
`;
const Body = styled.div`
    font-size: 1.5em; 
    color:white;
    word-wrap:break-word;
    width:85vw;
`;

const LetterEditor = () => {
    return (
        <LetterWrap>
            <Title>THE COLUMBIA DAILY SPECTATOR STAFF WHO MADE THIS ISSUE POSSIBLE</Title>
            <Body></Body>
        </LetterWrap>
    );
};

export default LetterEditor;