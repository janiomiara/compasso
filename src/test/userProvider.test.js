import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { ActionTypes, UserProvider, useUsers } from '../providers/user'
import { userMock } from '../mocks/userMock'

test('Testing  initial state user context ', () => {
  const wrapper = ({ children }) => < UserProvider>{children}</ UserProvider>
  const { result} = renderHook(() => useUsers(), { wrapper })
  expect(result.current.user).toBe('')
})

test('Testing user context funciton getUser', async () => {
  const wrapper = ({ children }) => < UserProvider>{children}</ UserProvider>
  const { result, } = renderHook(() => useUsers(), { wrapper })
  act(   () => {
     result.current.dispatch({ type: ActionTypes.GET_USER, user: userMock })
  })
  expect(result.current.user.login).toBe('janiomiara')
})
