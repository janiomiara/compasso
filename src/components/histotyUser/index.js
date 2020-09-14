import React from 'react'
import { useUsers } from '../../providers/user'
import { Container, ImgUser } from './styles'

const HistoryUsers = () => {
  const { getUserHistory, usersList } = useUsers()
  return (
    <Container>
      {usersList && usersList.map((user) => {
        return (<ImgUser src={user.avatar_url} alt={'profile pic'} onClick={() => getUserHistory(user)}/>)
      })}
    </Container>
  )
}

export default HistoryUsers
