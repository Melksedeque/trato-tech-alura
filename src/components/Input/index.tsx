import { Input as TypeInput } from 'types/Input';
import styles from './Input.module.scss';

export default function Input({ type, value, onChange }: TypeInput) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  );
}
