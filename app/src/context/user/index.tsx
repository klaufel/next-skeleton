import { createContext, useState, useReducer } from 'react'

let state, setState
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
  initialState,
}: UserContextProviderProps) {
  const [state, setState] = useState(initialState)

  const handleLogin = ({ userName, userId }: UserContextStateType) => {
    setState((prevState: UserContextStateType) => ({
      ...prevState,
      isLogged: true,
      userName,
      userId,
    }))
  }

  const value = { state, handleLogin }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

const UserContextConsumer = UserContext.Consumer

export { UserContext, UserContextProvider, UserContextConsumer }

export default UserContext
