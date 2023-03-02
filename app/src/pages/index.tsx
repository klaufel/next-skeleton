import ContainerHome, { type ContainerHomeProps } from '../containers/home'

export default function Home({ products }: ContainerHomeProps) {
  return <ContainerHome products={products} />
}

export const getStaticProps = async () => {
  const products = [{ icon: '🍉', name: 'Watermelon', price: 30 }]

  const intitialState = { isLogged: true, userName: 'jc', userId: 'l123123' }

  return { props: { products, intitialState } }
}
