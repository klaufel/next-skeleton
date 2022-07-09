import UserContext from '../index'
import { useContext } from 'react'

export default function useUser() {
  const context = useContext(UserContext)

  return context
}
