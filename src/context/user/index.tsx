import { createContext, useState, useReducer } from 'react'

import type {
  UserContextStateType,
  UserContextProviderProps,
  UserContextType,
} from './user.d'

const initialState: UserContextStateType = {
  isLogged: false,
  userName: null,
  userId: null,
}
const UserContext = createContext<UserContextType | null>(null)

function UserContextProvider({
  children,
  initialState: initialStateProps,
}: UserContextProviderProps) {
  const [state, setState] = useState(initialStateProps || initialState)

  const handleLogin = ({ userName, userId }: UserContextStateType): void => {
    setState((prevState) => ({
      ...prevState,
      isLogged: true,
      userName,
      userId,
    }))
  }

  const handleLogout = (): void => {
    setState(initialState)
  }

  const value = { state, handleLogin, handleLogout }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

const UserContextConsumer = UserContext.Consumer

export { UserContext, UserContextProvider, UserContextConsumer }

export default UserContext
