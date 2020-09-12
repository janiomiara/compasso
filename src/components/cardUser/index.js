import React from 'react'
import {
  ButtonUser,
  Container,
  ContainerStatus,
  ImgUser,
  NameUser,
  SubTitle,
  WrapperButton,
  WrapperHeard,
  WrapperStatus,
  Wrapperuser,
} from './styles'
import { useUsers } from '../../providers/user'
import {
  GitCommit,
  GitHub,
  MapPin,
  Archive,
  Users,
  UserPlus,
} from 'react-feather'
import moment from 'moment'
import { colors } from '../../styles/global'

const UserDetails = () => {
  const { user, getRepo, getStarred } = useUsers()

  const {
    avatar_url,
    login,
    updated_at,
    created_at,
    location,
    public_repos,
    followers,
    following,
  } = user
  const formatData = (date) => moment(date).format('DD/MM/YYYY')
  return (
    <>
      {user && (
        <>
          <Wrapperuser>
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
                <GitCommit />
                <p>Último Commit</p>
                <div>{formatData(updated_at)}</div>
              </WrapperStatus>

              <WrapperStatus>
                <MapPin />
                <p>Localização</p>
                <div>{location}</div>
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
