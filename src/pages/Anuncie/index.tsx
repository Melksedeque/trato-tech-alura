import Header from 'components/Header';
import styles from './Anuncie.module.scss';

export default function Anuncie() {
  return (
    <div className={styles.anuncie}>
      <Header titulo="Anunice aqui!" descricao="Anuncie seus produtos" />
    </div>
  );
}
