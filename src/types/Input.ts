export interface Input {
  type: 'text' | 'number' | 'url' | undefined;
  name?: string;
  value?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  disabled?: boolean;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
