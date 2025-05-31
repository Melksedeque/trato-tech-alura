import styles from './Header.module.scss';
import HeaderProps from 'types/Header';
import TituloSemImagem from 'components/Header/TituloSemImagem';
import TituloComImagem from 'components/Header/TituloComImagem';

export default function Header({ titulo, descricao, imagem }: HeaderProps) {
    return (
        <header className={`${styles.header}`}>
            {titulo && !imagem &&
                <TituloSemImagem titulo={titulo} descricao={descricao} />
            }
            {titulo && imagem &&
                <TituloComImagem titulo={titulo} descricao={descricao} imagem={imagem} />
            }
        </header>
    );
}