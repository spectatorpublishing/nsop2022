import React from 'react';
import styled from 'styled-components';
import { size } from '../device';
import { corporateBoard } from '../data/corporateBoard';
import '../index.css';

const LetterWrap = styled.div`
    padding-bottom:5vh;

    @media (max-width: ${size.tablet}) {
        padding-left:4%;
        padding-right:4%;
    }
`;

const Title = styled.div`
    font-family: 'Fraunces';
    font-weight:700;
    font-size: 3.8em;
    letter-spacing: 0.1em;
    padding:6vh 0 2vh 0;
    color:white;
    -webkit-text-stroke: 1px white;

    @media (max-width: ${size.tablet}) {
        font-size: 2em;
    }
`;

const Body = styled.div`
    font-size: 1.4em; 
    color:white;
    word-wrap:break-word;
    width:95%;
    @media (max-width: ${size.tablet}) {
        font-size: 1em;
        width:100%;
    }
`;

const Editor = styled.div`
    display:flex;
    flex-direction:column;
    margin:2rem 0rem;
`;

const Name = styled.p`
    font-weight: 700;
    margin:0;
`;

const Role = styled.p`
    margin:0;
`;

const LetterEditor = () => {
    return (
        <LetterWrap>
            <Title>LETTER FROM THE EDITOR</Title>
            <Body>
                <p>Dear readers, </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A mollis amet vitae sed purus, semper ullamcorper augue vitae. 
                    Hac pretium urna, tempus sit quam suspendisse maecenas et. Egestas neque sollicitudin rhoncus vitae at ipsum pulvinar faucibus. 
                    Facilisi risus blandit egestas in dignissim et sapien faucibus. Tortor accumsan libero sed aliquam dui magna vitae, habitant egestas. 
                    Consectetur egestas tellus auctor interdum id gravida quis pellentesque. At amet nulla tellus orci gravida. Egestas aenean mauris in velit.</p>
                {corporateBoard.map((person) => {
                    return (
                    <Editor>
                        <Name>{person.name}</Name>
                        <Role>{person.role}</Role>
                    </Editor>
                    )
                })}
            </Body></LetterWrap>
    );
};

export default LetterEditor;