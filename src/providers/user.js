import React, { createContext, useContext, useReducer } from 'react'
import Api from '../services/api'

const UserContext = createContext(null)

export const initialState = {
  user: '',
}

export const ActionTypes = {
  GET_USER: 'GET_USER',
}

const Action = {
  user: '',
  type: ActionTypes,
}

export function reducer(state = initialState, action = Action) {
  switch (action.type) {
    case ActionTypes.GET_USER:
      return {
        ...state,
        user: action.user,
      }
    default:
      return state
  }
}

export function useUsers() {
  const [{ user }, dispatch] = useContext(UserContext)

  const getUser = async (nameUser) => {
    try {
      const { data } = await Api.get(`users/${nameUser}`)
      dispatch({ type: ActionTypes.GET_USER, user: data })
    } catch (error) {
      console.log(error.response)
    }
  }

  return { getUser, user }
}

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
