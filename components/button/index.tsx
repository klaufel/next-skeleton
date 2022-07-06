import styles from './button.module.css'

export default function Button({ children, href, ...props}) {
    return <a className={styles.button} href={href} {...props}>e fef e fe fefefefefefeflkjfefeklfefefe fe fe fe fe {children}</a>
}