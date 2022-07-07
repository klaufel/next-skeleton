import styles from './modal.module.css'

type ModalProps = {
  children?: React.ReactNode;
}

export default function Modal({ children, ...props }: ModalProps) {
  return <div className={styles.Modal} {...props}>{children}</div>
}
