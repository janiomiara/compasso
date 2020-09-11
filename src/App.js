import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalStyles } from './styles/global'
import Nav from './components/nav'
import Provider from './providers'
import UserDetails from './components/users'

const data = () => {
  return <div>Janio</div>
}

function App() {
  return (
    <Provider>
      <Router>
        <GlobalStyles />
        <Nav />
        <UserDetails />
        <Switch>
          <Route exact path='/' component={data} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
