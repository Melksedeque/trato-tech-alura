import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <img src="/logo.png" alt="Logo do AluraFlix" />
            <form>
                <input type="text" placeholder="Pesquisar" />
                <button type="submit">Pesquisar</button>
            </form>
        </header>
    );
}