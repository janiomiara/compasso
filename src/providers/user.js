import React, { createContext, useContext, useReducer } from 'react'
import Api from '../services/api'

const UserContext = createContext(null)

export const initialState = {
  usersList: '',
  user: '',
  loading: false,
  error: null
}

export const ActionTypes = {
  GET_USER: 'GET_USER',
  GET_REPO: 'GET_REPO',
  GET_STARRED: 'GET_STARRED',
  GET_USER_NOT_HISTORY: 'GET_USER_NOT_HISTORY',
  GET_ERROR: 'GET_ERROR',
  LOADING: 'LOADING',
}

const Action = {
  user: '',
  starred: {},
  type: ActionTypes,
}

export function reducer(state = initialState, action = Action) {
  switch (action.type) {
    case ActionTypes.LOADING:
      return {
        ...state,
        loading: true,
        error: false
      }
    case ActionTypes.GET_USER:
      return {
        ...state,
        ...state.user,
        usersList: [...state.usersList, action.user],
        user: action.user,
        loading: false
      }
    case ActionTypes.GET_REPO:
      return {
        ...state,
        loading: false,
        user: {...state.user,  repo: action.repo}
      }
    case ActionTypes.GET_STARRED:
      return {
        ...state,
        loading: false,
        user: {...state.user,   starred: action. starred}
      }
    case ActionTypes.GET_USER_NOT_HISTORY:
      return {
        ...state,
        loading: false,
        user: action.user,
      }
    case ActionTypes.GET_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
    default:
      return state
  }
}

export function useUsers() {
  const [{ user, error,  usersList, loading }, dispatch] = useContext(UserContext)

  const getUser = async (nameUser) => {
    dispatch({ type: ActionTypes.LOADING})
    try {
      const { data } = await Api.get(`users/${nameUser}`)
      dispatch({ type: ActionTypes.GET_USER, user: data })
    } catch (error) {
      dispatch({ type: ActionTypes.GET_ERROR })
      console.log(error.response)
    }
  }

  const getStarred = async (nameUser) => {
    dispatch({ type: ActionTypes.LOADING})
    try {
      const { data } = await Api.get(`users/${nameUser}/starred`)
      dispatch({ type: ActionTypes.GET_STARRED, starred: data })
    } catch (error) {
      console.log(error.response)
    }
  }

  const getRepo = async (nameUser) => {
    dispatch({ type: ActionTypes.LOADING})
    try {
      const { data } = await Api.get(`users/${nameUser}/repos`)
      dispatch({ type: ActionTypes.GET_REPO, repo: data })
    } catch (error) {
      console.log(error.response)
    }
  }

  const getUserHistory = (user) => {
    try {
      dispatch({ type: ActionTypes.GET_USER_NOT_HISTORY, user })
    } catch (error) {
      console.log(error.response)
    }
  }

  return { getUser, getRepo, getStarred, getUserHistory, user, usersList ,error, loading}
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
