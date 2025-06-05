export interface Input {
  type: 'text' | 'number' | 'url' | undefined;
  placeholder: string;
  name?: string;
  value?: string | number;
  min?: string | number;
  max?: string | number;
  disabled?: boolean;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
