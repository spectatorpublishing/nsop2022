import React from 'react';
import styled from 'styled-components';
import { size } from '../device';
import { credits } from '../data/credits';
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
                <p>Dear Class of 2026,</p>
                <p>Welcome to Columbia! As you settle into your new home and get acquainted with campus, you probably have a number of lingering questions about what the years ahead will look like: Where should you eat when you are sick of dining hall food? What are the Columbia traditions you can’t miss? What controversies do you need to get up to speed on?</p>
                <p>Inside this special issue, you will find everything from course recommendations to tips every first-year student should know. Of course, we also present to you stories you should know as you take your first steps.</p>
                <h2>ABOUT SPECTATOR</h2>
                <p>Spectator is a financially independent student-run news organization with a 145-year tradition of telling in-depth, well-reported stories that hold those in power at Columbia accountable for decision-making that impacts tens of thousands of students, as well as residents in the local Morningside Heights and West Harlem communities. Central to our mission is helping our audience make the most of their time at Columbia through our award-winning journalism. Through Spectator’s publications and products, we aim to identify and directly address the needs of students and the surrounding community. Across all of our departments, which range from writing sections to business and innovations teams, we work to continuously improve your college experience within and beyond the campus gates.</p>
                <h2>JOINING SPECTATOR AND WORK-STUDY</h2>
                <p>We believe joining Spec is one of the best ways to kick off your four years at Columbia. Joining us means you are joining a community of sharp and passionate students who are constantly pushing themselves and the people around them to be better and building lifelong friendships along the way.</p>
                <p>Through the work they do for Spectator on our journalism, business, or tech teams, our staffers grow as leaders, thinkers, and people—gaining skills that apply to practically any career path they choose to pursue. As such, we are committed to ensuring that anyone who wants to become a Speccie can. That is why we are proud to offer the best work-study jobs on campus. If you qualify for work-study opportunities, even as a first-year, you can apply to our work-study program right away. Be sure to come to an open house or check out joinspec.com to learn more about the various ways you can get involved. We hope you find this guide useful and if you have any questions, don’t hesitate to reach out to us directly at editor@columbiaspectator.com.</p>
                <p>Sincerely,</p>
                {credits["Corporate Board"].map((person) => {
                    return (
                    <Editor>
                        <Name>{person.staff_name}</Name>
                        <Role>{person.title}</Role>
                    </Editor>
                    )
                })}
            </Body></LetterWrap>
    );
};

export default LetterEditor;