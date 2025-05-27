import styles from './Footer.module.scss'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const iconeProps = {
    color: 'white',
    size: 24,
}

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialIcons}>
                <FaFacebook { ...iconeProps } />
                <FaTwitter { ...iconeProps } />
                <FaInstagram { ...iconeProps } />
            </div>
            <div className={styles.copyright}>
                <p>Desenhado por <a href="http://www.alura.com.br/" target="_blank" rel="noopener noreferrer">Alura</a></p>
                <p>Desenvolvido por <a href="http://github.com/Melksedeque" target="_blank" rel="noopener noreferrer">Melksedeque</a></p>
            </div>
        </footer>
    );
}