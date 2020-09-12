import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { UserProvider, useUsers } from '../providers/user'

test('Testing  initial state user context ', () => {
  const wrapper = ({ children }) => < UserProvider>{children}</ UserProvider>
  const { result} = renderHook(() => useUsers(), { wrapper })
  expect(result.current.user).toBe('')
})

test('Testing user context funciton getUser', async () => {
  const wrapper = ({ children }) => < UserProvider>{children}</ UserProvider>
  const { result, waitForNextUpdate } = renderHook(() => useUsers(), { wrapper })
  act(  () => {
    result.current.getUser('janiomiara')
  })
  await waitForNextUpdate();
  expect(result.current.user.login).toBe('janiomiara')
})
