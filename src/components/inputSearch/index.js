import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Search } from 'react-feather'
import { useUsers } from '../../providers/user'
import { ButtonSearch, ContainerForm } from './styles'

const InputSearch = () => {
  const [user, setUser] = useState('')
  const { getUser } = useUsers()
  const submitForm = (e) => {
    e.preventDefault()
    getUser(user)
    setUser('')
  }

  return (
    <ContainerForm>
      <TextField
        data-testid='input-search'
        fullWidth
        id='outlined-basic'
        label='Search User'
        value={user}
        variant='outlined'
        onChange={(e) => setUser(e.target.value)}
      />
      <ButtonSearch disabled={!user} data-testid='submit' onClick={submitForm}>
        <Search />
      </ButtonSearch>
    </ContainerForm>
  )
}

export default InputSearch
