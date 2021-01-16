import React from 'react';
import styled from 'styled-components';

import { device } from '../device';

import ArticleBox from '../components/ArticleBox';
import VerticalNav from '../components/VerticalNav';
import MobileNavBar from '../components/MobileNav';

const SectionWrap1 = styled.div`
    display: flex;
    background: ${props => props.color};
`;

const Wrapper2 = styled.div`
    text-align: center;
`;

const Header = styled.h1`
    margin: 0rem;
    font-size: 2rem;
    letter-spacing: .5rem;
    color: #251282;
    padding-top: 2rem;

    @media ${device.tablet} {
        font-size: 3rem;
        letter-spacing: 1rem;
    }

    @media ${device.laptopS} {
        font-size: 3rem;
        letter-spacing: 2rem;
    }

    @media ${device.laptop} {
        font-size: 3rem;
        letter-spacing: 2rem;
    }
`;

const ArticlesWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const NavWrap = styled.div`
    display: none;

    @media ${device.tablet} {
        display: inherit;
        padding-bottom: 10rem;
    }

    @media ${device.laptopS} {
        padding-bottom: 15rem;
    }

    @media ${device.laptop} {
        padding-bottom: 20rem;
    }
`;

const MobileNavWrap = styled.div`
        display: inherit;

        @media ${device.tablet} {
            display: none;
        }
`;


const Section = ( { id, articles, header, color } ) => {
    return (
        <SectionWrap1 id={id} color={color}>
            <Wrapper2>
                <MobileNavWrap>
                    <MobileNavBar color="#251282" />
                </MobileNavWrap>
                <Header>{header}</Header> 
                <ArticlesWrap>
                    {articles.map(article => (
                        <ArticleBox article={article} />
                    ))}
                </ArticlesWrap>
            </Wrapper2>
            <NavWrap>
                <VerticalNav />
            </NavWrap>
        </SectionWrap1>
    );
};

export default Section;