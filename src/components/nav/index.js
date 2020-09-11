import React from 'react'
import { Container, WrapperLogo } from './styles'
import logo from '../../assets/img/git.png'
import logoCompasso from '../../assets/img/logo_compasso.png'
import InputSearch from '../inputSearch'

const Nav = () => {
  return (
    <Container>
      <WrapperLogo width={'200px'} align={'left'}>
        <img src={logo} alt={'Company logo GitHub'} />
      </WrapperLogo>
      <InputSearch />
      <WrapperLogo width={'60px'} align={'right'}>
        <img src={logoCompasso} alt={'Company logo Compasso'} />
      </WrapperLogo>
    </Container>
  )
}

export default Nav
