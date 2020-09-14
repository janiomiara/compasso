import React from 'react'
import logo from '../../../assets/img/github_sorry.png'
import { Container } from './styles'

const Mensagem = () => {
  return (
    <Container>
      <img src={logo} width={'100px'} alt={'Company logo GitHub'} />
      <div>Ops!, Não localizamos o usario!</div>
    </Container>
  )
}

export default Mensagem
