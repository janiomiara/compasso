import React from 'react'
import { Container } from './styles'
import UserDetails from '../cardUser'
import UserRepo from '../userRepo'
import UserStarred from '../userStarred'
import { useUsers } from '../../providers/user'
import Mensagem from '../mensagem'
import Loading from '../loading'

const User = () => {
  const { error, loading } = useUsers()

  return (
    <Container>
      {loading && <Loading/>}
      {!error ?
        <>
        <UserDetails />
        <UserRepo />
        <UserStarred />
        </>
        : <Mensagem/>
      }

    </Container>
  )
}

export default User
