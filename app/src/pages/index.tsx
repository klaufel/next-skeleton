import ContainerHome, { type ContainerHomeProps } from '../containers/home'
import domain from '@clv/domain'

export default function Home({ products }: ContainerHomeProps) {
  return <ContainerHome products={products} />
}

export const getStaticProps = async () => {
  const products = await domain['get_product_use_case']().execute()

  return { props: { products } }
}
