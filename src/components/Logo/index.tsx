import styles from './Logo.module.scss';
import logo from 'assets/images/logo.svg';

export default function Logo() {
    return (
        <div className={styles.logo}>
            <a href="/">
                <img src={logo} alt="Logo Trato Tech" />
            </a>
        </div>
    )
}