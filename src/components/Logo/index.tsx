import styles from './Logo.module.scss';
import logo from '../../assets/logo.png';

export default function Logo() {
    return (
        <div className={styles.logo}>
            <a href="/">
                <img src={logo} alt="Logo Trato Tech" />
            </a>
        </div>
    )
}