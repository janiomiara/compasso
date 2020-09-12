import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Search } from 'react-feather'
import { useUsers } from '../../providers/user'
import { BotaoSeach, ContainerForm } from './styles'

const InputSearch = () => {
  const [user, setUser] = useState('')
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
        label='user-input'
        value={user}
        variant='outlined'
        onChange={(e) => setUser(e.target.value)}
      />
      <BotaoSeach>
        <Search data-testid='submit' onClick={submitForm} />
      </BotaoSeach>
    </ContainerForm>
  )
}

export default InputSearch
