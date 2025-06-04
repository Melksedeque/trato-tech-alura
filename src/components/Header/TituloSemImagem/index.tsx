import styles from './TituloSemImagem.module.scss';
import HeaderProps from 'types/Header';

export default function TituloSemImagem({
  titulo,
  descricao,
  children,
}: HeaderProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>{titulo}</h1>
      <h2 className={styles.descricao}>{descricao}</h2>
      {children}
    </div>
  );
}
