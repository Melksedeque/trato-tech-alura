export interface Botao {
  type: 'submit' | 'reset' | 'button' | undefined;
  onClick: () => void;
  children?: React.ReactNode;
}
