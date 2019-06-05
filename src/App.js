import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import RingLoading from './pages/RingLoading'
import Rotation from './pages/RotationLoading'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ringLoading" component={RingLoading} />
        <Route exact path="/rotationLoading" component={Rotation} />
      </Switch>
    </Router>
  )
}

export default App
