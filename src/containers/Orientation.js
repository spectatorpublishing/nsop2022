import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #663399;  
  height: 100vh;
`;

const HelloThere = styled.p`
    color: white;
    font-weight: bold;
    width: 1000px;
    margin: auto;
    padding-top: 40vh;
    font-size: 48px;
`;

const Orientation = () => (
  <Wrapper>
    <HelloThere>WELCOME TO THE BACK TO CAMPUS ISSUE</HelloThere>
  </Wrapper>
);

export default Orientation;
