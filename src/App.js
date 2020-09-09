import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import { GlobalStyles } from './styles/global'
import Nav from './components/nav'

const data = () => {
  return <div>Janio</div>
}

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Nav/>
      <Switch>
        <Route exact path="/" component={data}/>
      </Switch>
    </Router>
  );
}

export default App;
