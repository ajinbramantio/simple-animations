import React from 'react'
import Navigation from '../components/Navigations'
import Styled from 'styled-components'

const Content = Styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    width:100%;
    height:100vh;
`
const Home = () => {
  return (
    <div>
      <Navigation />
      <Content>
        <h1>Welcome</h1>
      </Content>
    </div>
  )
}

export default Home
