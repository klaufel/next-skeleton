export type UserContextStateType = {
  isLogged: Boolean | null
  userName: String | null
  userId: String | null
}

export interface UserContextDispatcher {
  type: 'LOGIN' | 'LOGOUT'
  payload: UserContextStateType
}

export interface UserContextProviderProps {
  children: React.ReactNode
  initialState?: UserContextStateType
}

export type UserContextType = {
  state: UserContextStateType
  dispatch: Function<UserContextDispatcher>
}
