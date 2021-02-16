import React from 'react';
import styled from 'styled-components';

const ArticleWrap = styled.div`
    display: flex;
    flex-direction: column;
    width:37vw;
    margin-left: ${props => props.right ? "0vw" : "4vw"};
    margin-right: ${props => props.right ? "4vw" : "0vw"};
    margin-top: 2vw;
    margin-bottom:2vw;

`;

const Link = styled.a`
    text-decoration: none;
    width: 100%;
    justify-content:flex-start;
`;

const ArticleImg = styled.img`
    width: inherit;
    max-height: 20rem;
    overflow: hidden;
    opacity:0.35;
    transition-duration:1s;
    :hover {
        opacity:1;
    }
`;

const ImageWrap = styled.div`
    background: linear-gradient(rgba(1, 2, 193, 0.29),rgba(1, 2, 193, 0.29));
    z-index:10;
    width: inherit;
    max-height: 20rem;
    transition-duration:1s;
`;


const ArticleText = styled.div`
    text-align: left;
    color: white;
`;

const Title = styled.p`
    font-weight: 900;
    font-size: 1.25rem;
`;

const Author = styled.p`
`;


const ArticleBox = ({ article, right }) => {
    return (
        <ArticleWrap right={right}>
            <Link href={article.article_link} target="_blank" rel="noreferrer">
                <ImageWrap>
                    <ArticleImg src={article.image_url} />
                </ImageWrap>
                <ArticleText>
                    <Title>{article.article_title}</Title>
                    <Author>{article.article_authors}</Author>
                </ArticleText>
            </Link>
        </ArticleWrap>
    );
};

export default ArticleBox;