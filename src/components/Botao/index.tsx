import { Botao as TypeBotao } from 'types/Botao';
import styles from './Botao.module.scss';

export default function Botao({ type, onClick, children }: TypeBotao) {
  return (
    <button type={type} className={styles.botao} onClick={onClick}>
      {children}
    </button>
  );
}
