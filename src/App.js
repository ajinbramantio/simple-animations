import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import RingLoading from './pages/RingLoading'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ringLoading" component={RingLoading} />
      </Switch>
    </Router>
  )
}

export default App
