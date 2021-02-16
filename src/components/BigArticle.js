import React from 'react';
import styled from 'styled-components';

const ArticleWrap = styled.div`
    background: white;
    height:80vh;
    width:100%;
    margin-top:7.5vh;
    margin-bottom:7.5vh;
`;

const Link = styled.a`
    text-decoration: none;
    width: inherit;
`;

const ArticleImg = styled.img`
    width: inherit;
    height:100%;
    overflow: hidden;
`;

const ArticleText = styled.div`
    text-align: left;
    padding: 0.5rem 2rem;
    color: rgba(38, 36, 57, 1);
`;

const Title = styled.p`
    font-weight: bold;
    font-size: 1.25rem;
`;

const Author = styled.p`
`;

const TextWrap = styled.div`
    position:relative;
    right:0;
    float:right;
    bottom:10vh;
    background-color:white;
    width:40%;
`;



const BigArticle = ({ article }) => {
    console.log(article)
    return (
        <ArticleWrap>
            <Link href={article.article_link} target="_blank" rel="noreferrer">
                <ArticleImg src={article.image_url} />
                <TextWrap>
                    <ArticleText>
                        <Title>{article.article_title}</Title>
                        <Author>{article.article_authors}</Author>
                    </ArticleText>
                </TextWrap>
            </Link>
        </ArticleWrap>
    );
};

export default BigArticle;