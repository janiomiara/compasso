import React from 'react'
import { GlobalStyles } from './styles/global'
import Nav from './components/nav'
import Provider from './providers'
import User from './components/User/users'
import HistoryUsers from './components/User/histotyUser'

function App() {
  return (
    <Provider>
      <GlobalStyles />
      <Nav />
      <HistoryUsers />
      <User />
    </Provider>
  )
}

export default App
