import { useContext } from 'react'
import UserContext from '../index'

export default function useUser() {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('Cannot useUser() outside <UserProvider />')
  }

  return context
}
