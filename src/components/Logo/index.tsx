import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
import logo from 'assets/images/logo.svg';

export default function Logo() {
    return (
        <div className={styles.logo}>
            <Link to="/">
                <img src={logo} alt="Logo Trato Tech" />
            </Link>
        </div>
    )
}