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
    font-size: 3em;
    text-align:center;
    letter-spacing: 0.05em;
    color:white;
    width:65%;
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
    font-size: 2em;
    color:white;
    text-align:center;
    width:65%;
    margin-left:auto;
    margin-right:auto;
    padding-top:2vh;
    padding-bottom:2vh;
    
`;
const Body = styled.div`
    h1 {
        text-align:center;
        color:white;
    }
`;


const SubDiv = styled.div`
    width: 75vw;
    @media ${device.tablet} {
        width: fit-content;
    }
    color:white;
`;


const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    justify-content: center;
    @media ${device.tablet} {
        justify-content: space-evenly;
    }

    @media (max-width: 1000px) {
        font-size:0.75em;

    }
    @media (max-width: 768px) {
        font-size:1em !important;

    }
`;

const Content = styled.div`
    text-align:center;
`



const LetterEditor = () => {
    return (
        <LetterWrap>
            <Title>THE COLUMBIA DAILY SPECTATOR STAFF WHO MADE THIS ISSUE POSSIBLE</Title>
            <Credits> CREDITS </Credits>
            <Body>
                <Row>
                    <SubDiv>
                        <h2>Corporate Board</h2>
                        {credits['Corporate Board'].map(person => (
                            <p>{person.staff_name}, {person.title}</p>
                        ))}
                    </SubDiv>

                    <SubDiv>
                        <h2>Design and Development</h2>
                        {credits['Design and Development'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                    </SubDiv>

                    <SubDiv>
                        <h2>Lead Illustration By</h2>
                        <p>Ray Banke, Deputy Illustrations Editor</p>
                    </SubDiv>
                </Row>
                <h1>Content</h1>
                <Row>
                    <SubDiv>
                        <div>
                            <h3>University News</h3>
                            {credits['University News'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </div>
                        <div>
                            <h3>City News</h3>
                            {credits['City News'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </div>
                        <div>
                            <h3>Arts and Entertainment</h3>
                            {credits['Arts and Entertainment'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}

                        </div>
                        <div>
                            <h3>Illustrations</h3>
                            {credits['Illustrations'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}

                        </div>
                        <div>
                            <h3>Video</h3>
                            {credits['City News'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </div>
                        <div>
                            <h3>Spec Audio</h3>
                            {credits['City News'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </div>

                    </SubDiv>
                    <SubDiv>
                        <div>
                            <h3>Opinion</h3>
                            {credits['Opinion'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </div>
                        <div>
                            <h3>Sports</h3>
                            {credits['Sports'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </div>
                        <div>
                            <h3>Graphics</h3>
                            {credits['Graphics'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </div>
                        <div>
                            <h3>Photo</h3>
                            {credits['Photo'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}

                        </div>
                        <div>
                            <h3>The Eye</h3>
                            {credits['The Eye'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </div>
                    </SubDiv>
                    <SubDiv>
                        <div>
                            <h3>Copy</h3>
                            {credits['Copy'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </div>
                    </SubDiv>
                </Row>

            </Body>
        </LetterWrap>
    );
};

export default LetterEditor;