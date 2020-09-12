import React from 'react'
import { GlobalStyles } from './styles/global'
import Nav from './components/nav'
import Provider from './providers'
import User from './components/users'

function App() {
  return (
    <Provider>
      <GlobalStyles />
      <Nav />
      <User />
    </Provider>
  )
}

export default App
