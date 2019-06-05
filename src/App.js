import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import RingLoading from './pages/RingLoading'
import Rotation from './pages/RotationLoading'
import SwitchAlert from './pages/SwitchAlert'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ringLoading" component={RingLoading} />
        <Route path="/rotationLoading" component={Rotation} />
        <Route path="/switchAlert" component={SwitchAlert} />
      </Switch>
    </Router>
  )
}

export default App
