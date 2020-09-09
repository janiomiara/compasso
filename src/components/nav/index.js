import React from 'react'
import { Container, WrapperLogo } from './styles'
import logo from '../../assets/img/git.png'

const Nav = () => {
  return (
    <Container>
      <WrapperLogo src={logo} alt={'Company logo GitHub'}/>
    </Container>
  )
}

export default Nav
