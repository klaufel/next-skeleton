import styles from './button.module.css'

type ButtonProps = {
  children: React.ReactNode
  href: string
}

export default function Button({ children, href, ...props }: ButtonProps) {
  return (
    <a className={styles.button} href={href} {...props}>
      {children} →
    </a>
  )
}
