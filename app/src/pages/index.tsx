import ContainerHome, { type ContainerHomeProps } from '../containers/home'

export default function Home({ products }: ContainerHomeProps) {
  return <ContainerHome products={products} />
}

Home.getInitialProps = () => {
  const products = [
    { icon: '🍇', name: 'Grapes', price: 22 },
    { icon: '🍈', name: 'Melon', price: 22 },
    { icon: '🍉', name: 'Watermelon', price: 22 },
    { icon: '🍊', name: 'Tangerine', price: 22 },
    { icon: '🍋', name: 'Lemon', price: 22 },
    { icon: '🍌', name: 'Banana', price: 22 },
    { icon: '🍍', name: 'Pineapple', price: 22 },
    { icon: '🥭', name: 'Mango', price: 22 },
    { icon: '🍎', name: 'Red Apple', price: 22 },
    { icon: '🍏', name: 'Green Apple', price: 22 },
    { icon: '🍐', name: 'Pear', price: 22 },
    { icon: '🍑', name: 'Peach', price: 22 },
    { icon: '🍒', name: 'Cherries', price: 22 },
    { icon: '🍓', name: 'Strawberry', price: 22 },
    { icon: '🫐', name: 'Blueberries', price: 22 },
    { icon: '🥝', name: 'Kiwi Fruit', price: 22 },
    { icon: '🍅', name: 'Tomato', price: 22 },
    { icon: '🥥', name: 'Coconut', price: 22 },
  ]

  return { products }
}
