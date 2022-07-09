import styles from './button.module.css'

interface ButtonProps {
  children: React.ReactNode
  onClick?: any
}

export default function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick} {...props}>
      {children} →
    </button>
  )
}
