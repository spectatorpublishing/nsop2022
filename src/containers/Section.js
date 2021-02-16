import React from 'react';
import styled from 'styled-components';

import { device } from '../device';

import VerticalNav from '../components/VerticalNav';
import MobileNavBar from '../components/MobileNav';
import BigArticle from '../components/BigArticle';
import MediumArticle from '../components/MediumArticle';
import SmallArticle from '../components/SmallArticle';
import NavigationSec from '../components/Navigation';

const SectionWrap1 = styled.div`

    background: ${props => props.color};
    padding-left:9%;
    padding-right:9%;
`;

const Wrapper2 = styled.div`
`;

const Header = styled.h1`
    font-size: 2rem;
    letter-spacing: .05rem;
    color:rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px white;
    position:absolute;
    top:10vh;
    left:5vh;
    @media ${device.tablet} {
        font-size: 3rem;
        letter-spacing: .1rem;
    }

    @media ${device.laptopS} {
        letter-spacing: .1rem;
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
        padding-bottom: 4rem;
    }

    @media ${device.laptop} {
        padding-bottom: 3rem;
    }
`;

const MobileNavWrap = styled.div`
        display: inherit;

        @media ${device.tablet} {
            display: none;
        }
`;


const Section = ({ id, articles, header, color, next, link }) => {
    return (
        <SectionWrap1 id={id} color={color}>
            <Wrapper2>
                <MobileNavWrap>
                    <MobileNavBar color="#251282" current={id} />
                </MobileNavWrap>
                <Header>{header}</Header>
                <ArticlesWrap>
                    {articles.map((article, index) => {
                        if (index === 0) {
                            console.log("hi");
                            return <BigArticle article={article} />
                        } else if (index === 1) {
                            return <MediumArticle article={article} position="right" />
                        } else if (index === 2) {
                            return <MediumArticle Article article={article} position="left" />
                        } else
                            return <SmallArticle article={article} right={index % 2} />
                    })}
                </ArticlesWrap>
            </Wrapper2>
            <NavigationSec first={false} next={next} link={link} />
            <NavWrap>
                <VerticalNav color="#251282" current={id} />
            </NavWrap>
        </SectionWrap1>
    );
};

export default Section;