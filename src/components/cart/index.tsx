import styles from './cart.module.css'

export default function Cart({ cart, hasPriceReduction }) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Shopping cart</h3>
      <div className={styles.container}>
        {!!cart.length ? (
          <>
            {cart?.map(({ icon, name, price }) => (
              <div key={name}>
                {icon} {name} - {hasPriceReduction ? price / 2 : price} €
              </div>
            ))}
            <hr /> Total:{' '}
            <strong>
              {cart.reduce(
                (prev, { price }) =>
                  prev + (hasPriceReduction ? price / 2 : price),
                0
              )}{' '}
              €
            </strong>
          </>
        ) : (
          'Empty cart...'
        )}
      </div>
    </div>
  )
}
