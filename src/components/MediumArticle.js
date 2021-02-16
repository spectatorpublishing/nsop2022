import React from 'react';
import styled from 'styled-components';

const ArticleWrap = styled.div`
    display: flex;
    height:70vh;
    width:100%;
    margin-top:7.5vh;
    margin-bottom:7.5vh;
`;

const Link = styled.a`
    text-decoration: none;
    width: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ArticleImg = styled.img`
    width: 60%;
    height:100%;
    order: ${props => props.position === "left" ? "1" : "2"};
`;

const ArticleText = styled.div`
    text-align: left;
    color: #251282;
    width:${props => props.position === "left" ? "100%" : "115%"};
`;

const Title = styled.p`
    font-weight: bold;
    font-size:2.5em;
    color:white;

`;

const Author = styled.p`
    font-size:1.5em;
    color:white;

`;

const TextWrap = styled.div`
    order: ${props => props.position === "left" ? "2" : "1"};
    color:white;
    z-index:100;
    position:relative;
    left:${props => props.position === "left" ? "-10%" : "0%"};
`;


const MediumArticle = ({ article, position }) => {
    console.log(position)
    return (
        <ArticleWrap>
            <Link href={article.article_link} target="_blank" rel="noreferrer">
                <ArticleImg position={position} src={article.image_url} />
                <TextWrap position={position}>
                    <ArticleText position={position}>
                        <Title>{article.article_title}</Title>
                        <Author>{article.article_authors}</Author>
                    </ArticleText>
                </TextWrap>
            </Link>
        </ArticleWrap>
    );
};

export default MediumArticle;