import styles from './Botao.module.scss';
import { Botao as TypeBotao } from 'types/Botao';

export default function Botao({ type, onClick, children }: TypeBotao) {
  return (
    <button type={type} className={styles.botao} onClick={onClick}>
      {children}
    </button>
  );
}
