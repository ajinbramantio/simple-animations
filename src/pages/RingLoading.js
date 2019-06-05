import React from 'react'
import Styled, { keyframes } from 'styled-components'
import Navigation from '../components/Navigations'

const Div = Styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  background:#34495e;
  height:100vh;
 
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
const Background = Styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
   box-sizing:border-box;
  height:200px;
  width:200px;
  border-radius:50%;
  border-top: 10px solid #e74c3c;
  animation: ${rotate} 2s linear infinite;
  &::before,&::after{
    content:'';
     height:200px;
  width:200px;
  position:absolute;
   border-radius:50%;
  }
  &::before{
    border-top: 10px solid #e67e22;
         transform: rotate(120deg);
  }
   &::after{
    border-top: 10px solid #3498db;
         transform: rotate(240deg);
  }
`

const rotateP = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`

const PLoading = Styled.p`
animation: ${rotateP} 2s linear infinite;
color:white;
font-size:25px;
`

const RingLoading = () => {
  return (
    <div>
      <Navigation />
      <Div>
        <Background>
          <PLoading>loading...</PLoading>
        </Background>
      </Div>
    </div>
  )
}
export default RingLoading
