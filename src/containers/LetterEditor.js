import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import '../index.css';
const LetterWrap = styled.div`
    padding-bottom:5vh;
`;

const Title = styled.div`
    font-style: normal;
    font-weight: 900;
    font-size: 5em;
    letter-spacing: 0.05em;
    color:rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px white;
    
    padding:6vh 0 2vh 0;
    word-wrap:break-word;
`;

const Body = styled.div`
    font-size: 1.5em; 
    color:white;
    word-wrap:break-word;
    width:100%;
`;

const LetterEditor = () => {
    return (
        <LetterWrap>
            <Title>LETTER FROM THE EDITOR</Title>
            <Body><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A mollis amet vitae sed purus, semper ullamcorper augue vitae. Hac pretium urna, tempus sit quam suspendisse maecenas et. Egestas neque sollicitudin rhoncus vitae at ipsum pulvinar faucibus. Facilisi risus blandit egestas in dignissim et sapien faucibus. Tortor accumsan libero sed aliquam dui magna vitae, habitant egestas. Consectetur egestas tellus auctor interdum id gravida quis pellentesque. At amet nulla tellus orci gravida. Egestas aenean mauris in velit. Fermentum consectetur augue et habitant commodo, libero odio. </p>
                <p>Id nascetur vel eu fermentum elementum ac cras enim. Dui habitant commodo consequat sit in molestie in id. Ipsum volutpat etiam tristique fringilla. Tellus eu quis mauris massa tristique tortor, egestas luctus lacus. Gravida facilisis sagittis eget facilisi molestie amet, ut pellentesque morbi. </p> <p>Velit massa facilisis non enim arcu. Euismod cursus neque, feugiat vestibulum ornare. Feugiat feugiat tincidunt purus mauris quis lectus neque, molestie. Sed auctor sit fusce tristique. Nisl eu nullam gravida massa morbi purus. Ullamcorper eget sed venenatis enim, elit. In cursus pellentesque lacus ornare a.</p></Body>
        </LetterWrap>
    );
};

export default LetterEditor;