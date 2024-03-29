import type { AppProps } from 'next/app'
import { UserContextProvider } from '../context/user'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider initialState={pageProps.intitialState}>
      <Component {...pageProps} />
    </UserContextProvider>
  )
}
