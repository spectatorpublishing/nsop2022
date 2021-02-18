import React from 'react';
import styled from 'styled-components';
import LineTo from 'react-lineto';

import { device } from '../device';
import "../index.css";
import VerticalNav from '../components/VerticalNav';
import BigArticle from '../components/BigArticle';
import MediumArticle from '../components/MediumArticle';
import SmallArticle from '../components/SmallArticle';
import NavigationSec from '../components/Navigation';
import MobileNav from '../components/MobileNav';
import Lines from '../components/Lines';

const SectionWrap1 = styled.div`

    background: ${props => props.color};
    padding-left:9%;
    padding-right:9%;

    @media (max-width: 500px) {
        padding-left:4%;
        padding-right:4%;
    }
`;

const Wrapper2 = styled.div`
`;

const Header = styled.h1`
    font-size: 2rem;
    letter-spacing: .05rem;
    z-index:4;
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

    @media (max-width: 500px) {
        top:12vh;
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
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    const mobile = dimensions.width < 500;
    console.log(mobile)
    React.useEffect(() => {
        setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
        });

        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }

        window.addEventListener('resize', handleResize)
    }, [])
    let last_index = articles.length - 4;
    return (
        <div>
            <MobileNav current={id} />
            <SectionWrap1 id={id} color={color}>
                <Wrapper2>
                    <Header>{header}</Header>
                    <ArticlesWrap>
                        {articles.map((article, index) => {
                            if (index === 0) {
                                return (<div className="A" ><BigArticle article={article} /></div>
                                )
                            } else if (index === 1) {
                                if (mobile) {
                                    return (<div className="B">
                                        <SmallArticle article={article} />
                                    </div>)
                                }
                                else {
                                    return (<div className="B">
                                        <MediumArticle article={article} />
                                    </div>)
                                }

                            } else if (index === 2) {
                                if (mobile) {
                                    return (<div className="C">
                                        <SmallArticle article={article} />
                                    </div>)
                                }
                                else {
                                    return (<div className="C">
                                        <MediumArticle position="left" article={article} />
                                    </div>)
                                }
                            } else
                                return (<div style={{ 'marginRight': ((last_index === (index - 3)) && (last_index % 2 === 0) && (dimensions.width > 500)) ? "40vw" : "0" }} className={"D" + (index - 3)}><SmallArticle article={article} right={index % 2} /></div>)
                        })}
                    </ArticlesWrap>
                </Wrapper2>
                <div className="Nav">
                    <NavigationSec first={false} next={next} link={link} />
                </div>
                <Lines last_index={last_index} mobile={mobile} />
                <NavWrap>
                    <VerticalNav color="#251282" current={id} />
                </NavWrap>
            </SectionWrap1 >
        </div>
    );
};

export default Section;