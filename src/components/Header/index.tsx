import styles from './Header.module.scss';
import HeaderProps from 'types/Header';

export default function Header({ titulo, descricao, imagem, className = '' }: HeaderProps) {
    return (
        <header className={`${styles.header} ${className}`}>
            <div className={styles.texto}>
                <h1>{titulo}</h1>
                <h2>{descricao}</h2>
            </div>
            <div className={styles.imagem}>
                <img src={imagem} alt={titulo} />
            </div>
        </header>
    );
}