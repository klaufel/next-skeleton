import { createContext, useReducer } from 'react'

import type {
  UserContextStateType,
  UserContextDispatcher,
  UserContextProviderProps,
  UserContextType,
} from './user.d'

const initialState: UserContextStateType = {
  isLogged: false,
  userName: null,
  userId: null,
}
const UserContext = createContext<UserContextType | null>(null)

const reducer = (
  state: UserContextStateType,
  { type, payload }: UserContextDispatcher
) => {
  switch (type) {
    case 'LOGIN':
      return {
        isLogged: true,
        userName: payload.userName,
        userId: payload.userId,
      }
    case 'LOGOUT':
      return initialState
    default:
      return state
  }
}

function UserContextProvider({ children }: UserContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

const UserContextConsumer = UserContext.Consumer

export { UserContext, UserContextProvider, UserContextConsumer }

export default UserContext
