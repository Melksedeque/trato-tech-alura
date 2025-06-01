import styles from './Footer.module.scss';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const iconeProps = {
  color: 'white',
  size: 24,
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a
          href="https://www.linkedin.com/in/melksedeque-silva/"
          target="_blank"
        >
          <FaLinkedin {...iconeProps} href="" target="_blank" />
        </a>
        <a href="http://github.com/Melksedeque" target="_blank">
          <FaGithub {...iconeProps} />
        </a>
        <a href="https://x.com/SouzaMelk" target="_blank">
          <FaTwitter {...iconeProps} />
        </a>
      </div>
      <div className={styles.copyright}>
        <p>
          Desenhado por{' '}
          <a
            href="http://www.alura.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alura
          </a>
        </p>
        <p>
          Desenvolvido por{' '}
          <a
            href="http://github.com/Melksedeque"
            target="_blank"
            rel="noopener noreferrer"
          >
            Melksedeque
          </a>
        </p>
      </div>
    </footer>
  );
}
