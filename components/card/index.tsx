import styles from './card.module.css'

import Button from '../button'

interface CardProps {
  icon: string
  name: string
  onClick?: any
  price: number
  hasPriceReduction?: boolean
}

export default function Card({
  icon,
  name,
  onClick,
  price,
  hasPriceReduction = false,
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
        <Button onClick={onClick}>Add to cart</Button>
      </div>
    </div>
  )
}
