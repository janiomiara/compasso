import React, { useState } from 'react'
import { render, fireEvent } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import Provider from '../../providers'
import InputSearch from './index'
import { useUsers } from '../../providers/user'

test('Testing children of the Nav component', () => {
  const dados = renderHook(() => useUsers())
  //const { container, getByTestId } = render(
  //  <Provider>
  //    <InputSearch />
  //  </Provider>
  //)
  act(() => {
    console.log(dados.result)
  })

  //const input = getByTestId('input-search')
})
