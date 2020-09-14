import React from 'react'
import { GitHub } from 'react-feather'
import { useUsers } from '../../../providers/user'
import {
  CardLiguagen,
  CardRepo,
  CardTitle,
  ContainerRepo,
  RepoTitle,
  WrapperRepo,
} from './styles'

const UserRepo = () => {
  const { user } = useUsers()
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
