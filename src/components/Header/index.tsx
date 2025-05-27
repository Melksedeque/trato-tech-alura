import NavBar from 'components/NavBar';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <NavBar />
        </header>
    );
}