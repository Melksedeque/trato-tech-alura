import styles from './TituloComImagem.module.scss';
import HeaderProps from 'types/Header';

export default function TituloComImagem({titulo, descricao, imagem, className}: HeaderProps) {
    return (
        <div className={`${className} ${styles.header}`}>
            <div className={styles.texto}>
                <h1>{titulo}</h1>
                <h2>{descricao}</h2>
            </div>
            <div className={styles.imagem}>
                <img src={imagem} alt={titulo} />
            </div>
        </div>
    );
}