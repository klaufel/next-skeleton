import ContainerHome, { type ContainerHomeProps } from '../containers/home'
import domain from '@clv/domain'

export default function Home({ products }: ContainerHomeProps) {
  return <ContainerHome products={products} />
}

export const getStaticProps = async () => {
  const products = await domain['get_product_use_case']().execute()

  const intitialState = { isLogged: true, userName: 'jc', userId: 'l123123' }

  return { props: { products, intitialState } }
}
