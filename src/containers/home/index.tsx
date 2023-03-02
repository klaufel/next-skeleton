import Head from 'next/head'
import styles from './home.module.css'
import useUser from '../../context/user/hooks/useUser'
import { useState } from 'react'
import Button from '@next-skeleton/components/button'
import Card from '@next-skeleton/components/card'

import Cart from '../../components/cart'

type ProductsType = {
  icon: string
  name: string
  price: number
}

export interface ContainerHomeProps {
  products: Array<ProductsType>
}

export default function ContainerHome({ products }: ContainerHomeProps) {
  const { state, handleLogin, handleLogout } = useUser() ?? {}
  const { isLogged, userName } = state ?? {}

  const [cart, setCart] = useState<ProductsType[] | []>([])

  const handleClickLogin = (): void => {
    const { isLogged } = state

    return isLogged
      ? handleLogout()
      : handleLogin({
          userName: 'Jane Doe',
          userId: '7a3fe58c-82c0-4c56-9ef4-e5cd7e9a6733',
        })
  }

  const handleClickCardButton = (isBuyable: boolean, item: ProductsType) => {
    isBuyable
      ? setCart((prevState) => [...prevState, item])
      : setCart((prevState) =>
          prevState.filter(({ name }) => name !== item.name)
        )
  }

  return (
    <>
      <Head>
        <title>🧺 Fruits market</title>
        <meta
          name="description"
          content="A Next.js architecture boilerplate skeleton."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Fruits market</h1>
          <section className={styles.grid}>
            {products.map(({ icon, name, price }) => {
              const isBuyable = !Boolean(
                cart.find((item) => item.name === name)
              )
              return (
                <Card
                  icon={icon}
                  key={name}
                  name={name}
                  price={price}
                  isBuyable={isBuyable}
                  onClick={() =>
                    handleClickCardButton(isBuyable, { name, icon, price })
                  }
                  hasPriceReduction={Boolean(isLogged)}
                />
              )
            })}
          </section>
        </main>
        <aside className={styles.aside}>
          <span className={styles.subtitle}>
            {!isLogged && 'Hey! You have a discount if you log in'}
            <br />
            {!isLogged ? '🚀 Login' : `👋 Welcome ${userName}!`}
          </span>
          <br />
          <Button onClick={handleClickLogin}>
            {!isLogged ? 'Click to login!' : 'Logout'}
          </Button>
          <br /> <br />
          <Cart cart={cart} hasPriceReduction={Boolean(isLogged)} />
        </aside>
      </div>
    </>
  )
}
