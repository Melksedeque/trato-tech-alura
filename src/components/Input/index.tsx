import { Input as TypeInput } from 'types/Input';
import styles from './Input.module.scss';

export default function Input({ type, name, value, onChange }: TypeInput) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  );
}
