import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import { credits } from '../data/credits'
import '../index.css';

const LetterWrap = styled.div`
    padding-top:5vh;
    border:solid 1px white;
    margin-top:5vh;

    @media (max-width: 768px) {
        margin-left:4%;
        margin-right:4%;
    }
`;

const Title = styled.div`
    font-style: normal;
    font-weight: 900;
    font-size: 2.5em;
    font-family: Fraunces;
    text-align:center;
    letter-spacing: 0.05em;
    color:white;
    width:80%;
    margin-left:auto;
    margin-right:auto;
    
    padding:2vh 0 2vh 0;
    word-wrap:break-word;

    @media (max-width: 768px) {
        font-size:1.75em;
        width:90%;
        padding:1vh 0 1vh 0;
    }
    
`;

const Credits = styled.div`
    font-style: normal;
    font-weight: 900;
    font-family: Fraunces;
    font-size: 2em;
    color:white;
    text-align:center;
    width:65%;
    margin-left:auto;
    margin-right:auto;
    padding-top:2vh;
    padding-bottom:2vh;
    @media (max-width: 768px) {
        font-size: 1.25em;
    }
`;
const Body = styled.div`
    display:flex;
    justify-content: center;
`;


const SubDiv = styled.div`
    width: 75vw;
    padding-left: 1em;
    font-family: Poppins;
    @media ${device.tablet} {
        width: fit-content;
    }
    
    color:white;
`;

const Section = styled.div`
    padding-bottom:1em;
`;
const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    
    
    @media ${device.tablet} {
        justify-content: space-evenly;
    }

    @media (max-width: 1000px) {
        font-size:0.75em;

    }
    @media (max-width: 768px) {
        margin-left:1.25em;
        font-size:1em !important;
        text-align: center;

    }
`;



const LetterEditor = () => {
    return (
        <LetterWrap>
            <Title>THE COLUMBIA DAILY SPECTATOR STAFF WHO MADE THIS ISSUE POSSIBLE</Title>
            <Credits> CREDITS </Credits>
            <Body>
                <Row>
                
                
                    <SubDiv>
                    <Section>
                            <h3>Corporate Board</h3>
                            {credits['Corporate Board'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </Section>
                        <Section>
                            <h3>University News</h3>
                            {credits['University News'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </Section>
                        <Section>
                            <h3>Arts and Entertainment</h3>
                            {credits['Arts and Entertainment'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}

                        </Section>
                        <Section>
                            <h3>Illustrations</h3>
                            {credits['Illustrations'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}

                        </Section>
                    </SubDiv>
                    <SubDiv>
                    <Section>
                            <h3>Design and Development</h3>
                            {credits['Design and Development'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                        </Section>
                        <Section>
                            <h3>Opinion</h3>
                            {credits['Opinion'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </Section>
                        <Section>
                            <h3>Photo</h3>
                            {credits['Photo'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}

                        </Section>
                    </SubDiv>
                    <SubDiv>
                    <Section>
                            <h3>Lead Illustration By</h3>
                            <p>Ji Yoon Sim, Deputy Illustrations Editor</p>
                        </Section>
                        <Section>
                            <h3>Copy</h3>
                            {credits['Copy'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </Section>
                        <Section>
                            <h3>Spectrum</h3>
                            {credits['Spectrum'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </Section>
                        <Section>
                            <h3>Sports</h3>
                            {credits['Sports'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </Section>
                    </SubDiv>
                    
                </Row>
                
                

            </Body>
        </LetterWrap>
    );
};

export default LetterEditor;