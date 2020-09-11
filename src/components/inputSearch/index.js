import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Search } from 'react-feather'
import { useUsers } from '../../providers/user'
import { BotaoSeach, ContainerForm } from './styles'

const InputSearch = () => {
  const [user, setUser] = useState()
  const { getUser } = useUsers()

  const submitForm = () => {
    getUser(user)
    setUser('')
  }

  return (
    <ContainerForm>
      <TextField
        data-testid='input-search'
        fullWidth
        id='outlined-basic'
        label='Search'
        variant='outlined'
        value={''}
        onChange={(e) => setUser(e.target.value)}
      />
      <BotaoSeach>
        <Search onClick={submitForm} />
      </BotaoSeach>
    </ContainerForm>
  )
}

export default InputSearch
