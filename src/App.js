import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import {entity_capital_plural}Page from './pages/{entity_capital_plural}Page'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/{entity_plural}" component={{entity_capital_plural}Page} />
        <Redirect to="{entity_plural}" />
      </Switch>
    </Router>
  )
}

export default App
