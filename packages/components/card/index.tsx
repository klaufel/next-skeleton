import styles from './card.module.css'

import Button from '../button'

interface CardProps {
  hasPriceReduction?: boolean
  icon: string
  isBuyable?: boolean
  name: string
  onClick?: any
  price: number
}

export default function Card({
  hasPriceReduction = false,
  icon,
  isBuyable = true,
  name,
  onClick,
  price,
  ...props
}: CardProps) {
  return (
    <div className={styles.wrapper} {...props}>
      <div className={styles.image}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.description}>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.price}>{`${
            hasPriceReduction ? price / 2 : price
          } €`}</span>
        </div>
        <Button onClick={onClick} design={isBuyable ? 'primary' : 'secondary'}>
          {isBuyable ? 'Add to cart' : 'Remove'}
        </Button>
      </div>
    </div>
  )
}
