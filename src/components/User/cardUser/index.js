import React from 'react'
import { GitHub, Archive, Users, UserPlus } from 'react-feather'
import moment from 'moment'
import { useUsers } from '../../../providers/user'
import { colors } from '../../../styles/global'
import {
  ButtonUser,
  ContainerStatus,
  ImgUser,
  NameUser,
  SubTitle,
  WrapperButton,
  WrapperHeard,
  WrapperStatus,
  Wrapperuser,
} from './styles'

const UserDetails = () => {
  const { user, getRepo, getStarred } = useUsers()
  const {
    avatar_url,
    login,
    created_at,
    public_repos,
    followers,
    following,
  } = user
  const formatData = (date) => moment(date).format('DD/MM/YYYY')
  return (
    <>
      {user && (
        <>
          <Wrapperuser data-testid='wrapper-user'>
            <WrapperHeard>
              <ImgUser src={avatar_url} alt={'profile pic'} />
              <NameUser>{login}</NameUser>
              <SubTitle>Usuario</SubTitle>
            </WrapperHeard>

            <WrapperButton>
              <ButtonUser
                color={colors.secondary}
                onClick={() => getRepo(login)}
              >
                REPOSITORIOS
              </ButtonUser>
              <ButtonUser
                color={colors.activated}
                onClick={() => getStarred(login)}
              >
                REPOSITORIOS FAVORITADOS
              </ButtonUser>
            </WrapperButton>

            <ContainerStatus>
              <WrapperStatus>
                <GitHub />
                <p>Usuario desde</p>
                <div>{formatData(created_at)}</div>
              </WrapperStatus>

              <WrapperStatus>
                <Archive />
                <p>Repositorios</p>
                <div>{public_repos}</div>
              </WrapperStatus>

              <WrapperStatus>
                <Users />
                <p>Seguidores</p>
                <div>{followers}</div>
              </WrapperStatus>

              <WrapperStatus>
                <UserPlus />
                <p>Seguindo</p>
                <div>{following}</div>
              </WrapperStatus>
            </ContainerStatus>
          </Wrapperuser>
        </>
      )}
    </>
  )
}

export default UserDetails
