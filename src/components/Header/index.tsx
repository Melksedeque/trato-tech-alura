import styles from './Header.module.scss';
import HeaderProps from 'types/Header';
import TituloSemImagem from 'components/Header/TituloSemImagem';
import TituloComImagem from 'components/Header/TituloComImagem';

export default function Header({
  titulo,
  descricao,
  imagem,
  className = '',
  children,
}: HeaderProps) {
  return (
    <header className={`${styles.header}`}>
      {titulo && !imagem && (
        <TituloSemImagem titulo={titulo} descricao={descricao}>
          {children}
        </TituloSemImagem>
      )}
      {titulo && imagem && (
        <TituloComImagem
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        >
          {children}
        </TituloComImagem>
      )}
    </header>
  );
}
