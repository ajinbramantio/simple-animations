import React from 'react'
import Navigation from '../components/Navigations'
import Styled, { keyframes } from 'styled-components'

const Content = Styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    width:100%;
    height:100vh;
`
const Div = Styled.div`
    background:black;
`
const H1 = Styled.h1`
    color:#111;
    font-size:16em;
`
const animate = keyframes`
    0%,100%{
        color:#fff;
        filter:blur(2px);
        text-shadow:0 0 10px #00b3ff,
                     0 0 20px #00b3ff,
                     0 0 40px #00b3ff,
                     0 0 80px #00b3ff,
                     0 0 120px #00b3ff,
                     0 0 200px #00b3ff,
                     0 0 300px #00b3ff;
    }
    5%,95%{
        color:#111;
        filter:blur(0px);
        text-shadow: 0 0 10px none;
    }
`
const Span = Styled.span`
    display:table-cell;
    margin:0;
    padding:0;
     &:nth-child(1){
    animation: ${animate} 0.2s infinite;
  };
     &:nth-child(2){
    animation: ${animate} 0.25s infinite;
  };
     &:nth-child(3){
    animation: ${animate} 0.3s infinite;
  };
     &:nth-child(4){
    animation: ${animate} 0.4s infinite;
  };
     &:nth-child(5){
    animation: ${animate} 0.3s infinite;
  };
     &:nth-child(6){
    animation: ${animate} 0.25s infinite;
  };
     &:nth-child(7){
    animation: ${animate} 0.2s infinite;
  };
`
const Home = () => {
  return (
    <Div>
      <Navigation />
      <Content>
        <H1>
          <Span>W</Span>
          <Span>E</Span>
          <Span>L</Span>
          <Span>C</Span>
          <Span>O</Span>
          <Span>M</Span>
          <Span>E</Span>
        </H1>
      </Content>
    </Div>
  )
}

export default Home
