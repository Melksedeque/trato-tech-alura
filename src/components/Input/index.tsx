import { Input as TypeInput } from 'types/Input';
import styles from './Input.module.scss';
import { forwardRef } from 'react';

function Input(
  { type, name, value, placeholder, onChange }: TypeInput,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <input
      ref={ref}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={styles.input}
    />
  );
}

export default forwardRef(Input);
