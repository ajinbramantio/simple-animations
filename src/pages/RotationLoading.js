import React from 'react'
import Styled, { keyframes } from 'styled-components'

import Navigation from '../components/Navigations'

const Div = Styled.div`
background:#4092d6;
`
const Content = Styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    width:100%;
    height:100vh;
`
const Box = Styled.div`
    position:absolute;
    top:calc(50%-100px);
    left:calc(50%-100px);
    transform-style: preserve-3d;
    transform:perspective(1000px);
`
const BoxDiv = Styled.div`
    top:0px;
    left:0px;
    height:100%;
    display:flex;
    transform-style:preserve-3d;
`

const animate = keyframes`
0%{
    transform: rotateX(0deg);
}
100%{
    transform: rotateX(360deg);
}
`
const Span = Styled.span`
    font-size:100px;
    color:white;
    position:relative;
    display:block;
    animation:${animate} 2.8s linear infinite;
      &:nth-child(1){
    animation: ${animate} 1s linear infinite;
  };
      &:nth-child(2){
    animation: ${animate} 1.5s linear infinite;
  };
      &:nth-child(3){
    animation: ${animate} 1.75s linear infinite;
  };
      &:nth-child(4){
    animation: ${animate} 2s linear infinite;
  };
      &:nth-child(5){
    animation: ${animate} 2.25s linear infinite;
  };
      &:nth-child(6){
    animation: ${animate} 2.5s linear infinite;
  };
   &:nth-child(7){
    animation: ${animate} 2.75s linear infinite;
  };
`
const RotationLoading = () => {
  return (
    <Div>
      <Navigation />

      <Content>
        <Box>
          <BoxDiv>
            <Span>L</Span>
            <Span>O</Span>
            <Span>A</Span>
            <Span>D</Span>
            <Span>I</Span>
            <Span>N</Span>
            <Span>G</Span>
          </BoxDiv>
        </Box>
      </Content>
    </Div>
  )
}

export default RotationLoading
