import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import StateName from './components/StateName'
import About from './components/About'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/state/:stateCode" component={StateName} />
    <Route component={NotFound} />
  </Switch>
)

export default App
