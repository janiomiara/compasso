import React, { createContext, useContext, useReducer } from 'react'
import Api from '../services/api'

const UserContext = createContext(null)

export const initialState = {
  user: '',
  repo: '',
  starred: '',
}

export const ActionTypes = {
  GET_USER: 'GET_USER',
  GET_REPO: 'GET_REPO',
  GET_STARRED: 'GET_STARRED',
}

const Action = {
  user: '',
  repo: {},
  starred: {},
  type: ActionTypes,
}

export function reducer(state = initialState, action = Action) {
  switch (action.type) {
    case ActionTypes.GET_USER:
      return {
        ...state,
        user: action.user,
      }
    case ActionTypes.GET_REPO:
      return {
        ...state,
        repo: action.repo,
      }
    case ActionTypes.GET_STARRED:
      return {
        ...state,
        starred: action.starred,
      }
    default:
      return state
  }
}

export function useUsers() {
  const [{ user, repo, starred }, dispatch] = useContext(UserContext)

  const getUser = async (nameUser) => {
    try {
      const { data } = await Api.get(`users/${nameUser}`)
      dispatch({ type: ActionTypes.GET_USER, user: data })
    } catch (error) {
      console.log(error.response)
    }
  }

  const getStarred = async (nameUser) => {
    try {
      const { data } = await Api.get(`users/${nameUser}/starred`)
      dispatch({ type: ActionTypes.GET_STARRED, starred: data })
    } catch (error) {
      console.log(error.response)
    }
  }

  const getRepo = async (nameUser) => {
    try {
      const { data } = await Api.get(`users/${nameUser}/repos`)
      dispatch({ type: ActionTypes.GET_REPO, repo: data })
    } catch (error) {
      console.log(error.response)
    }
  }

  return { getUser, getRepo, getStarred, user, repo, starred }
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
