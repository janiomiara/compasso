import React from 'react'
import {
  CardLiguagen,
  CardRepo,
  CardTitle,
  ContainerRepo,
  RepoTitle,
  WrapperRepo,
} from './styles'
import { useUsers } from '../../../providers/user'
import { GitHub } from 'react-feather'

const UserRepo = () => {
  const { user, getRepo } = useUsers()
  return (
    <>
      {user.repo && (
        <ContainerRepo>
          <RepoTitle>
            <GitHub />
            REPOSITORIOS
          </RepoTitle>
          <WrapperRepo>
            {user.repo.map((item) => {
              return (
                <CardRepo>
                  <CardTitle>{item.name}</CardTitle>
                  <CardLiguagen>{item.language}</CardLiguagen>
                </CardRepo>
              )
            })}
          </WrapperRepo>
        </ContainerRepo>
      )}
    </>
  )
}

export default UserRepo
