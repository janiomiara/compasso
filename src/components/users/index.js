import React from 'react'
import { Container } from './styles'
import UserDetails from '../cardUser'
import UserRepo from '../userRepo'
import UserStarred from '../userStarred'

const User = () => {
  return (
    <Container>
      <UserDetails />
      <UserRepo />
      <UserStarred />
    </Container>
  )
}

export default User
