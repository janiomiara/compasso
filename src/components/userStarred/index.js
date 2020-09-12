import React from 'react'
import { useUsers } from '../../providers/user'
import { GitHub } from 'react-feather'
import {
  CardLiguagen,
  CardTitle,
  ContainerStareed,
  StarredCard,
  StarredTitle,
  WrapperStarred,
} from './styles'

const UserStarred = () => {
  const { starred } = useUsers()
  return (
    <>
      {starred && (
        <ContainerStareed>
          <StarredTitle>
            <GitHub />
            REPOSITORIOS MAIS VISITADOS
          </StarredTitle>
          <WrapperStarred>
            {starred.map((item) => {
              return (
                <StarredCard>
                  <CardTitle>{item.name}</CardTitle>
                  <CardLiguagen>{item.language}</CardLiguagen>
                </StarredCard>
              )
            })}
          </WrapperStarred>
        </ContainerStareed>
      )}
    </>
  )
}

export default UserStarred
