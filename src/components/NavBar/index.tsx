import Logo from 'components/Logo'
import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <Logo />
        </nav>
    )
}